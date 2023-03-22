import os
import numpy as np
import pandas as pd
from tespy.components import HeatExchangerSimple, CycleCloser, Compressor, Valve, HeatExchanger, Source, Sink, Condenser
from tespy.connections import Connection, Ref
from tespy.networks import Network

ETA_COMPRESSOR = 0.675
TTD_HEAT_EXCHANGERS = 5
HEATING_SYSTEM_FEED_TEMP = 35
HEATING_SYSTEM_RETURN_TEMP = 30
AMBIENT_TEMP_NOMINAL = 7
HEAT_NOMINAL = -9.1e3
ETA_COMPRESSOR_INIT = 0.8

_file_path = os.path.dirname(os.path.realpath(__file__))

def load_temperature_data():
    """Returns temperature (in °C) over timestamp
    """

    csv_path = _file_path + "/../2023_Stundenstatistik.txt"

    # weather data from https://wetterstation.physik.rwth-aachen.de/datenbank.php
    df = pd.read_csv(csv_path, delim_whitespace=True)
    df.index = (pd.to_datetime(
        [
            f"{year}-{month}-{day} {hour}:00:00"
            for year, month, day, hour in zip(df['#Jahr'], df['Monat'], df['Tag'], df['Stunde'])
        ]
    ))
    df = df[["T_Mid"]]
    df.rename(columns={"T_Mid": "Ambient temperature (°C)"}, inplace=True)
    df["Ambient temperature (d°C)"] = 10 * df["Ambient temperature (°C)"]

    return df

def load_input_data():
    input_data = load_temperature_data()
    
    # A crude demand model should be enough for us. Let the demand be 500 W per K below 15 °C.
    input_data["Heat load (kW)"] = (0.5 * (15 - input_data["Ambient temperature (°C)"])).clip(lower=0)

    return input_data


def load_tespy_cop():
    df = pd.read_csv("COP-T-tespy.csv", index_col=[0])

    # hack to work with floats as index
    df2 = df.reindex(np.arange(-100, 311, 1)/10)

    df2["COP"] = pd.Series.interpolate(df2["COP"])

    df2.index = 10 * df2.index

    return df2


def load_tespy_coefficients():
    df = pd.read_csv("coefficients-offset-transformer.csv", index_col=[0])

    # hack to work with floats as index
    df2 = df.reindex(np.arange(-100, 210, 1)/10)

    df2["slope"] = pd.Series.interpolate(df2["slope"])
    df2["offset"] = pd.Series.interpolate(df2["offset"])

    df2.index = 10 * df2.index

    return df2


def simple_heat_pump(working_fluid):

    nwk = Network(fluids=[working_fluid], p_unit="bar", T_unit="C", iterinfo=False)

    cp = Compressor("compressor")
    ev = HeatExchangerSimple("evaporator")
    cd = HeatExchangerSimple("condenser")
    va = Valve("expansion valve")
    cc = CycleCloser("cycle closer")

    c0 = Connection(va, "out1", cc, "in1", label="0")
    c1 = Connection(cc, "out1", ev, "in1", label="1")
    c2 = Connection(ev, "out1", cp, "in1", label="2")
    c3 = Connection(cp, "out1", cd, "in1", label="3")
    c4 = Connection(cd, "out1", va, "in1", label="4")

    nwk.add_conns(c0, c1, c2, c3, c4)

    # connections
    c2.set_attr(T=AMBIENT_TEMP_NOMINAL)
    c4.set_attr(T=HEATING_SYSTEM_FEED_TEMP)

    # components
    cp.set_attr(eta_s=ETA_COMPRESSOR)
    cd.set_attr(Q=HEAT_NOMINAL)

    # connections
    c2.set_attr(fluid={working_fluid: 1}, x=1.0)
    c4.set_attr(x=0.0)

    # components
    cd.set_attr(pr=1)
    ev.set_attr(pr=1)

    # to supress warning
    cd.zeta.min_val = -1e3
    ev.zeta.min_val = -1e3

    nwk.solve("design")

    return nwk


def partload_heat_pump(working_fluid):
    nwk = Network(fluids=[working_fluid, "air", "Water"], p_unit="bar", T_unit="C", iterinfo=False)

    cp = Compressor("compressor")
    ev = HeatExchanger("evaporator")
    cd = Condenser("condenser")
    va = Valve("expansion valve")
    cc = CycleCloser("cycle closer")

    so1 = Source("ambient air source")
    si1 = Sink("ambient air sink")
    so2 = Source("heating source")
    si2 = Sink("heating sink")

    c0 = Connection(va, "out1", cc, "in1", label="0")
    c1 = Connection(cc, "out1", ev, "in2", label="1")
    c2 = Connection(ev, "out2", cp, "in1", label="2")
    c3 = Connection(cp, "out1", cd, "in1", label="3")
    c4 = Connection(cd, "out1", va, "in1", label="4")

    nwk.add_conns(c0, c1, c2, c3, c4)

    c11 = Connection(so1, "out1", ev, "in1", label="11")
    c12 = Connection(ev, "out1", si1, "in1", label="12")

    c21 = Connection(so2, "out1", cd, "in2", label="21")
    c22 = Connection(cd, "out2", si2, "in1", label="22")

    nwk.add_conns(c11, c12, c21, c22)

    # connections
    c4.set_attr(T=HEATING_SYSTEM_FEED_TEMP + TTD_HEAT_EXCHANGERS)

    # components
    Q_design = HEAT_NOMINAL
    cp.set_attr(eta_s=ETA_COMPRESSOR)
    cd.set_attr(Q=Q_design)

    # connections
    c2.set_attr(fluid={working_fluid: 1, "Water": 0, "air": 0}, x=1.0)
    c11.set_attr(fluid={working_fluid: 0, "Water": 0, "air": 1}, p=1.0, T=AMBIENT_TEMP_NOMINAL)
    c12.set_attr(T=Ref(c11, 1, -2))
    c21.set_attr(fluid={working_fluid: 0, "Water": 1, "air": 0}, p=3.0, T=HEATING_SYSTEM_RETURN_TEMP)
    c22.set_attr(T=HEATING_SYSTEM_FEED_TEMP)

    # components
    cd.set_attr(pr1=1, pr2=1)
    ev.set_attr(pr1=1, pr2=1, ttd_l=TTD_HEAT_EXCHANGERS)

    nwk.solve("design")

    cd.set_attr(ttd_u=TTD_HEAT_EXCHANGERS)
    c4.set_attr(T=None)

    nwk.solve("design")
    return nwk
