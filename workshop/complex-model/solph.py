import numpy as np
import oemof.solph as solph
import matplotlib.pyplot as plt

hp_thermal_power = 9.1  # kW

time_intervals = solph.create_time_index(2023, 1, 3)

cop = np.array([4, 5, 4.5])
demand = np.array([3, 2, 2.5])

es = solph.EnergySystem(timeindex=time_intervals, infer_last_interval=False)

b_electricity = solph.Bus(label="electricity")
b_heat_40C = solph.Bus(label="heat 40C")
es.add(b_electricity, b_heat_40C)

electricity_grid = solph.components.Source(
    label="electricity grid",
    outputs={b_electricity: solph.Flow(variable_costs=0.4)},  # €/kWh
)

heat_demand = solph.components.Sink(
    label="heat demand",
    inputs={b_heat_40C: solph.Flow(nominal_value=1, fix=demand)},  # kW
)
es.add(electricity_grid, heat_demand)

heat_pump_in = solph.Bus(inputs={b_electricity: solph.Flow()})
heat_pump_out = solph.Bus(
    outputs={b_heat_40C: solph.Flow(nominal_value=5)}
)
es.add(heat_pump_in, heat_pump_out)

simple = False
if simple:
    es.add(solph.components.Transformer(
        label="heat pump",
        inputs={heat_pump_in: solph.Flow()},
        outputs={heat_pump_out: solph.Flow(
            nominal_value=hp_thermal_power,
            nonconvex=solph.NonConvex(),
            min=0.5,
        )},
        conversion_factors={
            heat_pump_in: 1 / cop,
            heat_pump_out: 1,
        },
    ))
else:
    es.add(solph.components.OffsetTransformer(
        label=f"heat pump",
        inputs={heat_pump_in: solph.Flow(
            nominal_value=5,
            min=0.0,
            nonconvex=solph.NonConvex(),
        )},
        outputs={heat_pump_out: solph.Flow(
            nominal_value=hp_thermal_power,
            nonconvex=solph.NonConvex(),
            min=0.5,
        )},
        coefficients=[0, cop]
    ))

heat_storage = solph.components.GenericStorage(
    label="heat_storage",
    nominal_storage_capacity=5,  # kWh
    inputs={b_heat_40C: solph.Flow()},
    outputs={b_heat_40C: solph.Flow()},
    loss_rate=0.05,
)
es.add(heat_storage)

model = solph.Model(energysystem=es)

model.solve()

results = solph.processing.results(model)

curve_el_in = results[(b_electricity, heat_pump_in)]["sequences"]
curve_heat_produced = results[(heat_pump_out, b_heat_40C)]["sequences"]
curve_heat_demand = results[(b_heat_40C, heat_demand)]["sequences"]

plt.plot(curve_el_in, drawstyle="steps-post", label="el")
plt.plot(curve_heat_produced, drawstyle="steps-post", label="prod. heat")
plt.plot(curve_heat_demand, drawstyle="steps-post", label="heat_demand")

plt.plot(curve_heat_produced/curve_el_in, drawstyle="steps-post", label="COP")

plt.plot(results[(heat_storage, None)]["sequences"], label="storage content")

plt.legend()

plt.show()
