from tespy.components import HeatExchangerSimple, CycleCloser, Compressor, Valve
from tespy.connections import Connection
from tespy.networks import Network


def simple_heat_pump_network(working_fluid):

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
    c2.set_attr(T=10)
    c4.set_attr(T=50)

    # components
    cp.set_attr(eta_s=0.8)
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
