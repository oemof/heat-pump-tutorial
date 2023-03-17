(installation-label)=

# Setup your Python environment

In this section you learn how to prepare your python installation.

## Installation

Make sure you have installed your favorite python on your machine. A lightweight python installation is, for example,
[miniforge](https://github.com/conda-forge/miniforge). Then you can follow these steps to create an environment and
install the required dependencies:

1. Create a new folder on your machine.
2. Download the `environment.yml` file from the
   [github repository](https://github.com/fwitte/oemof-workshop-osmses-2023) and save it to the new folder OR create an
   `environment.yml` in your folder manually and copy the following contents into it:

   ```{literalinclude} /../environment.yml
   ```
3. Open the miniforge3 prompt and navigate into that folder with `cd /path/to/the/folder`
4. Create and prepare the environment mit `conda env create -f environment.yml`
5. Activate your environment using `conda activate oemof-workshop-osmses`

For the usage of `oemof-solph` you will also need a solver. To download and install a solver, please follow the
instructions at the installation section of the
[oemof-solph](https://oemof-solph.readthedocs.io/en/latest/readme.html#installation) online documentation.

## Using jupyter-notebooks

We have prepared all relevant functions used in this workshope in a separate python script. You can download it here:
{download}`utilities.py </model/utilities.py>`. To make use of it, save it into the working directory you created in the
installation step.

We are going to use jupyter-notebooks to create and run our models. In your active miniforge3 console type:

`jupyter notebook`

This will start a local server, which you can access with your browser. There you can create a new notebook file, e.g.
`dispatch`, which we will use to create the oemof-solph model and a second file, e.g. `thermodynamics`, which we will
use to create the TESPy model.
