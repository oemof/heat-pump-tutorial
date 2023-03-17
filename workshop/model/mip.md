(mixed-integer-model-label)=

# Introduction

In the second chapter we are introducing part load modeling. First, the previous oemof-solph model is extended by
simply adding a minimal load requirement. Then, a second TESPy model is created to investigate how the design of the
heat pump for a specific operation point affects the part load efficiency, i.e. if the ambient temperature changes and
if the heat load changes. These information will be transferred to the oemof-solph model again, which will implement a
new component to account for the part load efficiency.

- {ref}`Introducing minimal load in solph <solph-minimal-load>`
- {ref}`Simulation of part load performance with TESPy <tespy-part-load>`
- {ref}`Combining the approaches <solph-offset>`
