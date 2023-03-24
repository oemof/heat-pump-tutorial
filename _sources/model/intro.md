# Scope of the Workshop

In this tutorial we are going to implement an example domestic heating system with an **air source heat pump**.
{numref}`Systemoverview` shows an overview of the system we are going to model and the most important information
required in for each system component. We are focussing on the heat pump model, therefore the data we need to model a
heat pump in a (mixed integer) linear model. These can, for example, be derived from a manufacturer's datasheet, from
distinct thermodynamic modeling or from databases.

```{figure} /figures/Systemoverview.svg
---
alt: Overview on the system modeled in the tutorial
name: systemoverview
---
Overview on the system modeled in the tutorial
```

One of the most important pieces of information is the COP of the heat pump, connecting the heat production with the
power requirement, and the necessary data can be derived in various forms. The COP of the heat pump can be calculated
from the ratio of total produced heat {math}`\dot Q_\text{prod}` to the total required work {math}`\sum \dot W` in eq.
{eq}`cop-heat-pump-general`. For a simple 4-component heat pump setup, the definitions simplifies to a single heat
output at the condenser and a single work input at the compressor eq. {eq}`cop-heat-pump-simple`. We use the absolute
value of the heat produced to obtain a positive COP value when following a system oriented sign convention. If we have
knowledge of the heat pump's COP we want to apply to our model, we can connect the heat production with the compressor
power in eq. {eq}`heat-from-compressor-power-and-COP`.

```{math}
    :label: cop-heat-pump-general
    \text{COP} = \frac{|\sum \dot Q_\text{prod}|}{\sum \dot W}
```

```{math}
    :label: cop-heat-pump-simple
    \text{COP} = \frac{|\dot Q_\text{prod}|}{\dot W}
```

```{math}
    :label: heat-from-compressor-power-and-COP
    |\dot Q_\text{prod}| = \text{COP} \cdot \frac{}{\dot W}
```

Therefore, the challenge lies in calculating the COP of the heat pump. In a real world system, the COP of an air source
heat pump mostly depends on

- the ambient temperature,
- the heat production temperature and
- the load of the heat pump (compressor).

## Carnot COP Method

One way of calculating the COP is to calculate the Carnot COP {math}`\text{COP}_\text{c}` and link it to the actual COP
with an efficiency factor {math}`\eta_\text{hp}`. The Carnot COP is the thermodynamically best possible COP and it only
depends on the temperature levels of the heat source and the heat sink. For a simplified approach, the Carnot COP can be
obtained with eq. {eq}`carnot-cop-heat-pump`.

```{math}
    :label: carnot-cop-heat-pump
    \text{COP}_\text{c} = \frac{T_\text{max}}{T_\text{max} - T_\text{min}}
```

The efficiency factor may be considered a constant value in a first attempt. With that, we can calculate the COP based
on an ambient temperature profile and the target heating temperature:

```{math}
    :label: cop-heat-pump-carnot-and-efficiency
    \text{COP} = \frac{T_\text{max}}{T_\text{max} - T_\text{min}} \cdot \eta_\text{hp}
```

With a predefined time series for the ambient temperature, you can calculate the Carnot COP and integrate it as a time
dependant input parameter for the optimization problem.

## Thermodynamic Simulation Model

A different method to obtain the same outcome is to build a dedicated thermodynamic simulation model of the heat pump
process. To implement such a simulation assumptions have to be done on the internal process of the heat pump. With that
it is possible to directly determine the COP and its dependency to the temperature levels but also the (part) load of
the system. We are going to implement such a model in a simplified way in {ref}`this section <tespy-simple>`, where the
COP only depends on the ambient temperature level and in a more detailed way in {ref}`this section <tespy-part-load>`,
where an additional dependency, i.e. part load operation, is taken into consideration.

# Table of contents

In the first chapter we are building a linear model of the heat pump using oemof-solph first. The model will implement a
temperature dependent COP, which is done using the Carnot COP and assuming a constant efficiency factor. The efficency
factor is retrieved from a specification sheet of a real world system. In the second step a simple four-component TESPy
model of the heat pump is built. The model is set up in a way to match the specifications from the data sheet of the
heat pump using component specific assumptions for the compressor and the heat exchangers. Then, a simulation for the
ambient temperature regime is carried out to obtain the COP and to show the differences between assuming a constant
efficiency factor and the thermodynamic model.

- {ref}`Linear model <solph-linear>`
- {ref}`TESPy thermodynamic simlation <tespy-simple>`
- {ref}`Combining solph and TESPy <solph-linear-tespy>`

In the second chapter we are introducing part load modeling. First, the previous oemof-solph model is extended by
simply adding a minimal load requirement. Then, a second TESPy model is created to investigate how the design of the
heat pump for a specific operation point affects the part load efficiency, i.e. if the ambient temperature changes and
if the heat load changes. These information will be transferred to the oemof-solph model again, which will implement a
new component to account for the part load efficiency.

- {ref}`Introducing minimal load in solph <solph-minimal-load>`
- {ref}`Simulation of part load performance with TESPy <tespy-part-load>`
- {ref}`Combining the approaches <solph-offset>`
