# solph

Air source heat pump

## Preparing the solph input data

Inputs:

- show datasheet
- Temperature curve for ambient temperature per timestep
- constant efficiency assumption

Outputs:

- carnot-cop bzw. cop per timestep

## Creating the oemof-solph model

Inputs:

- code for model + cop per timestep from preprocessing
- heat demand time series
- storage from oemof-thermal

Outputs:

- dispatch of the heat pump (0/1?)
- temporal profile for heat production and COP

## Create simple TESPy model

Inputs:

- Temperature data
- Some assumption on components

Outputs:

- Design efficiency at different temperatures

## same solph model as before but with TESPy inputs

...

- Comparison of both solph models

## Heat pump with part load efficiency curve

- extend on TESPy model, create a compressor efficiency

## Solph model with part load efficiency (OffsetTransformer)

Inputs:

- constant efficiency + minimal load -> NonConvexFlow

Outputs:

- comparison to above
