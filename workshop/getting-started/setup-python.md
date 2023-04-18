(installation-label)=

# Set up your Python environment

In this section you learn how to prepare your python installation.

## Installation

Make sure you have installed your favorite python distribution as well as a code editor on your machine. A lightweight
python installation is, for example, [miniforge](https://github.com/conda-forge/miniforge). Then you can follow these
steps to create an environment and install the required dependencies:

1. Download or clone the github repository: `git clone https://github.com/oemof/heat-pump-tutorial `
2. Open the miniforge3 prompt and navigate into that folder: `cd /path/to/the/oemof-workshop-osmses-2023`
3. Create and prepare the environment: `conda env create -f environment.yml`
4. Activate your environment: `conda activate oemof-workshop-osmses`

For the usage of `oemof-solph` you will also need a solver. To download and install a solver, please follow the
instructions at the installation section of the
[oemof-solph](https://github.com/oemof/oemof-solph/#installing-a-solver) github repository.

## Working with jupyter-notebooks

In the in person-workshop we will be working with Jupyter Notebooks. It is possible to edit the notebooks in code
editors (e.g. in VS Code) or in the browser. To learn more about how to use them, you can check out the respective
section in the [online documentation](https://jupyter.org/).

```{note}
If you installed all dependencies into your python environment as described in the steps above, you do NOT need to
install jupyter notebook separately.
```

We will create three different notebooks in the course, i.e.

- a single notebook for all dispatch optimization models with oemof-solph,
- a notebook for a simplified/rudimentary heat pump model with TESPy and
- a notebook for an advanced TESPy model.

```{tip}
In some occasions we are using predefined functions, that are not shown in the notebooks. You can download the file with
all those functions here: {download}`utilities.py </model/utilities.py>`.
```
