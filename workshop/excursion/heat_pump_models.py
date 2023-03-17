from tespy.components import HeatExchangerSimple, CycleCloser, Compressor, Valve, HeatExchanger, Source, Sink, Condenser
from tespy.connections import Connection, Ref
from tespy.networks import Network


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
    c2.set_attr(T=7)
    c4.set_attr(T=35)

    # components
    cp.set_attr(eta_s=0.4625)
    cd.set_attr(Q=-10e3)

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
    c4.set_attr(T=55)

    # components
    Q_design = -10e3
    cp.set_attr(eta_s=0.8)
    cd.set_attr(Q=Q_design)

    # connections
    c2.set_attr(fluid={working_fluid: 1, "Water": 0, "air": 0}, x=1.0)
    c11.set_attr(fluid={working_fluid: 0, "Water": 0, "air": 1}, p=1.0, T=5)
    c12.set_attr(T=Ref(c11, 1, -2))
    c21.set_attr(fluid={working_fluid: 0, "Water": 1, "air": 0}, p=3.0, T=40)
    c22.set_attr(T=50)

    # components
    cd.set_attr(pr1=1, pr2=1)
    ev.set_attr(pr1=1, pr2=1, ttd_l=5)

    nwk.solve("design")

    cd.set_attr(ttd_u=5)
    c4.set_attr(T=None)

    nwk.solve("design")
    return nwk
