(simple-linear-model-label)=

# Introduction

In this chapter we are building a linear model of the heat pump using oemof-solph first. The model will implement a
temperature dependent COP, which is done using the Carnot COP and assuming a constant efficiency factor. The efficency
factor is retrieved from a specification sheet of a real world system. In the second step a simple four-component TESPy
model of the heat pump is built. The model is set up in a way to match the specifications from the data sheet of the
heat pump using component specific assumptions for the compressor and the heat exchangers. Then, a simulation for the
ambient temperature regime is carried out to obtain the COP and to show the differences between assuming a constant
efficiency factor and the thermodynamic model.

- {ref}`Linear model <solph-linear>`
- {ref}`TESPy thermodynamic simlation <tespy-simple>`
- {ref}`Combining solph and TESPy <solph-linear-tespy>`
