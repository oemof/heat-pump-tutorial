# oemof Workshop at the OSMSES 2023

Welcome to the documentation of the oemof session at the 2nd International
workshop on "Open Source Modelling and Simulation of Energy Systems".
The workshop has been developed by [Francesco Witte](https://github.com/fwitte)
and [Patrik Schönfeld](https://github.com/p-snft) at the German Areospace
Center (DLR), Institute of Networked Energy Systems.

You will learn how to use and apply the two most know oemof libraries, i.e.
`oemof.solph` {cite}`Krien2020` and `TESPy` {cite}`Witte2020`, in the context of
modeling heat pumps in energy system analysis. If you would like to add more
contents you are welcome to open a pull request on the repository.

## Abstract

Since the implementation and operation of heat pumps is considered one of the
major key-elements for the decarbonization of the heat sector. Modelling these
for energy system analysis, which usually applies linear or mixed integer
programming, has thus become a well-known task in various temporal and spatial
model scopes. Even in a linear program the model can integrate a varying COP as
function of ambient and heating temperature curves by pre-calculating the
Carnot COP and assuming an efficiency factor. To account for more detail in the
model, for example minimum part load or part load variable COP, a mixed integer
formulation is required. However, this implementation also requires more
technical information on the heat pumps performance at varying conditions. Such
data can be retrieved from literature sources or databases, e.g. hp_lib
{cite}`Hoops2022` which provides a good overview on general performance
parameters for heat pump models of many manufacturers. However, using these
sources falls short in case the part load performance or temperature ranges
should be assessed, which are out of the industry standard scope, for example
in novel research applications. A dedicated thermodynamic simulation model can
fill this gap.

## Structure of the Tutorial and Teaching Method

In this tutorial researchers and modellers will therefore learn to

- model heat pumps in linear and mixed integer linear programs,
- calculate the heat pump’s performance in a dedicated thermodynamic model, and
- how to combine these methods in order to improve the representation of a heat
  pump in the energy system model.

The software applied in the tutorial session will be
[oemof-solph](https://oemof-solph.readthedocs.io) as energy system optimisation
tool and [TESPy](https://tespy.readthedocs.io) as thermodynamic modelling
framework. Both are part of the popular open energy modelling framework
[oemof](https://oemof.org).

Conceptually, the tutorial is divided in three learning steps:

- To pick up the participants, a broadly known approach on modelling heat pumps
  with respective pre-calculation of the Carnot COP and assumption of a
  constant efficiency factor is applied in `oemof.solph` in the first step.
- Second, a simple thermodynamic model of the 4-component heat pump is built
  using `TESPy` and the respective parameters required in the first step of the
  tutorial are calculated and then transferred to the `oemof.solph` model.
- The two known approaches are then combined and extended in the third step:
  The `TESPy` model will be modified to enable calculation of the COP in part
  load operation within the full range of heat source and heat sink temperature
  values. The `oemof.solph` model will employ a piece-wise linear approach to
  model different efficiency values at different part load operation ranges.
  Finally, the information from the non-linear thermodynamic model are
  linearized and transferred to the `oemof.solph` model.

## Preconditions for Participants

It is recommended, that participants have basic knowledge on modelling linear
and mixed integer problems as well as using Python. Furthermore, an
understanding of a heat pump’s components and its physical properties are
useful. While not required, it is possible to self-prepare specifically for the
frameworks used in this tutorial with numerous examples available on the
respective documentation websites.

## Acknowledgements

We would like to give a special Thank You to the awesome `oemof` community, which - independently of institutions - has
been able to put out some amazing libraries for energy modelers word wide.

## LICENSE

```{eval-rst}
.. include:: /../LICENSE
```
