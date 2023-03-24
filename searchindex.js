Search.setIndex({"docnames": ["excursion/entropy-analysis", "excursion/partload-analysis", "getting-started/5-minutes-into-solph", "getting-started/5-minutes-into-tespy", "getting-started/setup-python", "index", "model/intro", "model/solph-minimal-load", "model/solph-offset", "model/solph-simple", "model/solph-with-tespy", "model/tespy-partload-performance", "model/tespy-simple", "zliterature"], "filenames": ["excursion/entropy-analysis.ipynb", "excursion/partload-analysis.ipynb", "getting-started/5-minutes-into-solph.ipynb", "getting-started/5-minutes-into-tespy.ipynb", "getting-started/setup-python.md", "index.md", "model/intro.md", "model/solph-minimal-load.ipynb", "model/solph-offset.ipynb", "model/solph-simple.ipynb", "model/solph-with-tespy.ipynb", "model/tespy-partload-performance.ipynb", "model/tespy-simple.ipynb", "zliterature.md"], "titles": ["Entropy Analysis of the COP", "Disection of the partload efficiency", "5 minutes into oemof-solph", "5 minutes into TESPy", "Setup your Python environment", "oemof Workshop at the OSMSES 2023", "Scope of the Workshop", "oemof-solph model with minimal load", "oemof-solph model with variable partload efficiency", "Linear oemof-solph heat pump model", "Combining oemof-solph and TESPy", "Part load performance in TESPy", "Simple TESPy heat pump model", "Literature References"], "terms": {"strictli": [0, 12], "speak": 0, "definit": [0, 6, 9, 12], "heat": [0, 2, 4, 5, 6, 7, 8, 13], "pump": [0, 1, 3, 4, 5, 6, 7, 8, 11, 13], "follow": [0, 4, 5, 6, 9, 10, 11, 12], "eq": [0, 6, 8, 9, 12], "4": [0, 1, 2, 3, 5, 6, 9, 10, 11, 12, 13], "onli": [0, 6, 9, 10, 11, 12], "valid": 0, "process": [0, 2, 3, 6, 7, 8, 9, 10, 11], "consist": [0, 2, 3], "two": [0, 3, 5, 9, 11, 12], "isentrop": [0, 3, 11], "subprocess": 0, "compress": [0, 1, 3, 11], "expans": [0, 11, 12], "isotherm": 0, "evapor": [0, 3, 9, 11, 12], "condens": [0, 6, 9, 11, 12], "For": [0, 1, 3, 4, 6, 8, 9, 11, 12], "thi": [0, 1, 3, 4, 5, 6, 7, 8, 9, 11, 12], "possibl": [0, 4, 5, 6, 11], "would": [0, 5, 11], "need": [0, 4, 6, 9, 12], "us": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "turbin": [0, 3, 13], "instead": [0, 3, 7, 8, 11], "an": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12], "valv": [0, 3, 11, 12], "must": [0, 7, 9], "phase": [0, 3], "region": [0, 3], "again": [0, 1, 6, 7, 10, 11], "after": [0, 3, 10], "while": [0, 1, 5, 11, 12], "dry": 0, "reach": 0, "back": [0, 3, 11, 12], "satur": [0, 3, 12], "dome": 0, "higher": [0, 3, 9, 12], "pressur": [0, 1, 3, 11, 12], "technic": [0, 5, 13], "expand": 0, "liquid": [0, 12], "feasibl": 0, "still": [0, 1], "we": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "can": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "appli": [0, 1, 3, 5, 6, 7, 11], "method": [0, 3, 9, 10, 11, 12], "our": [0, 3, 6, 7, 8, 9, 10, 11, 12], "cycl": [0, 1, 11, 12, 13], "from": [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12], "thermodynam": [0, 3, 5, 9, 11, 12, 13], "have": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "make": [0, 1, 3, 4, 9, 10, 11, 12], "some": [0, 1, 3, 4, 5, 10, 11], "chang": [0, 3, 6, 8, 9, 10, 11, 12], "howev": [0, 5, 9, 12], "even": [0, 1, 5], "allow": [0, 1, 11], "show": [0, 1, 2, 3, 6, 9, 11], "contribut": 0, "individu": [0, 1, 3], "compon": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12], "its": [0, 5, 6, 7, 11], "non": [0, 5, 12], "optim": [0, 2, 4, 6, 10, 11, 13], "1": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "slightli": [0, 11], "adapt": 0, "replac": [0, 8], "temperatur": [0, 1, 3, 5, 6, 7, 8, 9, 10, 12], "level": [0, 1, 3, 6, 9, 11, 12], "t_": [0, 6, 11], "text": [0, 6, 8, 11, 12], "max": [0, 1, 6, 8, 11], "min": [0, 6, 7, 8, 11], "mean": [0, 1, 11], "m": [0, 3, 8, 11, 12], "prod": [0, 6], "consumpt": 0, "con": 0, "11": [0, 1, 11, 13], "The": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12], "defin": [0, 3, 8, 11, 12], "12": [0, 1, 9, 11, 13], "_": [0, 1, 6, 9, 11, 12], "c": [0, 3, 5, 6, 7, 8, 9, 10, 11, 12], "frac": [0, 6, 8, 12], "mathrm": [0, 1, 11, 12], "q": [0, 1, 3, 11, 12], "dot": [0, 1, 6, 11, 12], "s_": 0, "With": [0, 3, 6, 8, 9, 12], "calcul": [0, 1, 3, 5, 6, 9, 11, 12], "tespi": [0, 4, 5, 6, 7, 8, 13], "model": [0, 1, 2, 4, 5, 13], "call": [0, 3], "balanc": [0, 2, 12], "equat": [0, 3, 12], "obtain": [0, 5, 6], "featur": 0, "complet": [0, 11], "If": [0, 1, 4, 5, 6, 11], "anybodi": 0, "interest": [0, 8], "topic": [0, 3], "pleas": [0, 3, 4], "out": [0, 4, 5, 6, 8], "develop": [0, 5], "via": 0, "github": [0, 3, 4], "repositori": [0, 3, 4, 5], "your": [0, 3, 11], "highli": 0, "appreci": 0, "simple_heat_pump": 0, "function": [0, 1, 4, 5, 8, 9, 11, 12], "import": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12], "section": [0, 1, 4, 6, 7, 9, 11, 12], "li": [0, 1, 6], "separ": [0, 1, 4, 12], "python": [0, 1, 5, 13], "document": [0, 1, 3, 4, 5, 11], "you": [0, 1, 3, 4, 5, 6, 11], "download": [0, 1, 4], "heat_pump_model": [0, 1], "py": [0, 1, 4], "panda": [0, 1, 11, 12], "pd": [0, 1, 11, 12], "numpi": [0, 1, 7, 8, 9, 10, 11, 12, 13], "np": [0, 1, 7, 8, 9, 10, 11, 12], "matplotlib": [0, 1, 2, 7, 8, 9, 10, 11, 12], "pyplot": [0, 1, 2, 7, 8, 9, 10, 11, 12], "plt": [0, 1, 2, 7, 8, 9, 10, 11, 12], "def": [0, 11], "carnot_cop_temperature_vari": 0, "nwk": [0, 1, 3, 11, 12], "temperature_rang": [0, 9, 11, 12], "result": [0, 1, 2, 3, 7, 8, 9, 10, 11], "datafram": [0, 1, 11, 12], "index": [0, 1, 9, 11, 12], "column": [0, 1, 10, 11, 12], "cop_carnot": [0, 12], "cop_carnot_simpl": 0, "c2": [0, 3, 11, 12], "c4": [0, 3, 11, 12], "get_conn": [0, 1], "2": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "ev": [0, 1, 11, 12], "cd": [0, 1, 4, 11, 12], "cp": [0, 1, 3, 11, 12], "va": [0, 11, 12], "get_comp": [0, 1], "compressor": [0, 6, 8, 11, 12], "t": [0, 1, 3, 11, 12, 13], "set_attr": [0, 1, 3, 11, 12], "solv": [0, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13], "design": [0, 1, 3, 6, 12], "entropy_bal": 0, "loc": [0, 1, 8, 11, 12], "ab": [0, 1, 11, 12], "val": [0, 1, 3, 11, 12], "p": [0, 1, 3, 11, 12, 13], "t_mq": 0, "val_si": [0, 12], "deviat": [0, 11], "return": [0, 11], "r290": [0, 1, 3, 11, 12], "linspac": [0, 1, 8, 11], "10": [0, 3, 8, 9, 10, 11, 12, 13], "31": 0, "32": [0, 9, 10], "fig": [0, 1, 3, 6, 8, 9, 10, 11, 12], "ax": [0, 1, 8, 9, 10, 11, 12], "subplot": [0, 1, 8, 9, 10, 11, 12], "sharex": [0, 1, 8, 11, 12], "true": [0, 1, 8, 9, 11, 12], "label": [0, 1, 2, 3, 7, 8, 9, 10, 11, 12], "simpl": [0, 3, 5, 6, 7, 10, 11], "0": [0, 1, 2, 3, 7, 8, 9, 10, 11, 12], "plot": [0, 1, 2, 7, 8, 9, 10, 11, 12], "set_ylabel": [0, 1, 8, 9, 10, 11, 12], "legend": [0, 7, 8, 9, 10, 11, 12], "ratio": [0, 1, 3, 6, 11], "set_xlabel": [0, 1, 8, 9, 10, 11, 12], "grid": [0, 2, 7, 8, 9, 10, 12], "set_axisbelow": [0, 12], "close": [0, 1, 8, 9, 10, 11, 12], "observ": [0, 1], "differ": [0, 1, 3, 4, 5, 6, 8, 9, 10, 11, 12], "between": [0, 1, 3, 6, 9, 11, 12], "approach": [0, 3, 5, 6, 9, 10, 11], "18": [0, 9, 11], "doe": [0, 1, 2, 3, 11, 12], "explain": 0, "sharp": 0, "increas": [0, 1, 11], "effici": [0, 3, 5, 6, 9, 10, 11, 12], "factor": [0, 5, 6, 8, 9, 10, 11, 12], "seen": 0, "7": [0, 2, 3, 8, 9, 10, 11, 12, 13], "To": [0, 3, 4, 5, 6, 8, 10, 11, 12], "phenomenom": [0, 12], "disect": 0, "calculat": 0, "littl": [0, 1], "bit": [0, 1], "further": [0, 3], "comparison": [0, 9, 10, 11, 12], "calcualt": 0, "simplifi": [0, 4, 6, 11], "exact": [0, 11], "do": [0, 4, 5, 7, 8, 9, 11, 12], "first": [0, 1, 3, 5, 6, 9, 10, 11, 12], "reorder": [0, 12], "begin": 0, "align": [0, 11], "q_": [0, 6], "w": [0, 1, 6, 8, 11, 12], "end": [0, 12], "Then": [0, 1, 4, 6, 7, 8, 11, 12], "transfer": [0, 3, 5, 6, 9, 11, 12], "cdot": [0, 6, 8, 12], "final": [0, 1, 5, 8, 9, 10, 11, 12], "second": [0, 3, 5, 6, 11, 12], "law": 0, "system": [0, 2, 3, 5, 6, 7, 8, 11, 12, 13], "consum": [0, 1, 11], "all": [0, 1, 3, 4, 5, 7, 9, 11, 12], "insid": [0, 1], "sum": [0, 6, 7, 8, 9, 10, 12], "irr": 0, "i": [0, 3, 4, 5, 6, 9, 11, 12], "simplif": 0, "express": [0, 5], "below": [0, 1, 3, 11, 12], "line": [0, 1, 11], "14": [0, 11, 13], "left": [0, 9, 12], "right": [0, 5, 9, 12], "formular": 0, "where": [0, 6, 7, 11, 12], "term": 0, "ident": [0, 10], "invers": 0, "valu": [0, 3, 5, 6, 7, 8, 9, 10, 11, 12], "part": [0, 1, 5, 6, 7, 12], "ar": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12], "loss": [0, 3, 9, 12], "induc": 0, "see": [0, 1, 3, 9, 11, 12], "ineffici": 0, "lower": [0, 1, 2, 9, 11, 12], "given": [0, 3, 9], "inform": [0, 5, 6, 9, 11, 12], "extend": [0, 5, 6, 11], "accordingli": 0, "entropy_analysis_temperature_vari": 0, "component_list": 0, "t_m": 0, "f": [0, 4, 7, 8, 9, 10, 13], "s_irr": 0, "q_condens": 0, "depend": [0, 1, 2, 3, 4, 6, 8, 11, 12], "relev": [0, 3], "influenc": [0, 1], "x": [0, 1, 3, 11, 12], "total": [0, 3, 6], "retriev": [0, 5, 6, 11], "same": [0, 1, 6, 9, 11, 12], "standard": [0, 5], "19": [0, 9], "inspect": [0, 11], "irreverisbl": [0, 12], "element": [0, 5], "20": [0, 9, 13], "here": [0, 3, 4, 10, 11, 12], "declin": 0, "steeper": 0, "That": [0, 9, 11], "reason": [0, 1, 3, 11, 12], "when": [0, 3, 6, 9, 11, 12], "rise": [0, 1], "s": [0, 1, 2, 3, 5, 6, 11, 12, 13], "effect": [0, 8, 11, 12, 13], "type": [0, 1, 2], "also": [0, 4, 5, 6, 8, 11, 12], "itself": 0, "As": [0, 3], "exampl": [0, 2, 4, 5, 6, 8, 9, 11, 12], "assess": [0, 5, 9, 12], "classif": 0, "more": [0, 1, 2, 4, 5, 6, 11, 12], "e": [0, 3, 4, 5, 6, 9, 11, 12, 13], "g": [0, 4, 5, 11, 13], "13": [0, 2, 3, 11, 13], "which": [0, 1, 3, 5, 6, 7, 11, 12], "roughli": 0, "slope": [0, 8, 11], "dew": 0, "ts": 0, "diagram": 0, "wet": 0, "It": [0, 2, 4, 5, 11], "ha": [0, 1, 5, 9, 11], "forward": 0, "face": 0, "vertic": 0, "parallel": 0, "backward": 0, "coolprop": [0, 3, 13], "propssi": [0, 3], "psi": [0, 3], "propan": [0, 3, 12], "color": [0, 11, 12], "tab": [0, 12], "blue": [0, 10], "pentan": 0, "red": [0, 10], "ammonia": 0, "green": [0, 12], "saturation_dom": 0, "data": [0, 1, 3, 5, 6, 8, 9, 10, 12], "item": [0, 11], "pressure_rang": 0, "260": [0, 13], "pcrit": 0, "boiling_t": 0, "boiling_": 0, "dew_t": 0, "dew_": 0, "figur": [0, 2, 7, 8, 9, 10, 11, 12], "21": [0, 9, 11, 12], "illustr": 0, "neopentan": 0, "each": [0, 6, 12], "three": [0, 2, 3, 4, 5, 11], "displai": [0, 2, 8, 9, 10], "22": [0, 9, 11], "decreas": [0, 1, 11], "There": [0, 9, 11, 12], "anoth": 0, "well": [0, 3, 4, 5, 11, 12], "known": [0, 5], "exergi": 0, "been": [0, 5, 11], "implement": [0, 1, 5, 6, 8, 9, 11], "6": [0, 1, 3, 11, 12, 13], "sinc": [0, 1, 3, 5, 9, 11, 12], "want": [0, 3, 6, 9, 11], "connect": [0, 3, 5, 6, 8, 9, 11, 12], "excurs": [0, 11, 12], "In": [1, 3, 4, 5, 6, 7, 9, 11, 12, 13], "provid": [1, 3, 5, 7, 9, 11, 12], "insight": 1, "load": [1, 5, 6, 8, 9, 10], "look": [1, 3, 7, 8, 9, 11, 12], "characterist": [1, 11], "coeffici": [1, 8, 9, 11], "investig": [1, 6, 11, 12], "point": [1, 6, 9, 11], "ambient": [1, 3, 5, 6, 7, 8, 9, 10, 12], "case": [1, 5, 7, 11, 12], "stronger": [1, 12], "than": [1, 2, 9, 11, 12], "partload_heat_pump": 1, "script": [1, 10], "creat": [1, 2, 3, 4, 6, 9, 11, 12], "network": [1, 3, 5, 11, 12], "ambient_temp_nomin": [1, 9], "heat_nomin": 1, "save": [1, 10, 11, 12], "state": [1, 3, 11, 12], "next": [1, 9, 10, 11, 12], "simulaiton": 1, "refer": [1, 9, 11, 12], "simul": [1, 3, 5, 7, 10, 12], "heat_rang": [1, 11], "5": [1, 7, 8, 9, 10, 11, 12, 13], "results_heat": [1, 11], "power": [1, 2, 6, 7, 8, 9, 10, 11, 12], "cop": [1, 5, 7, 8, 9, 10, 11, 12], "c11": [1, 11], "c12": [1, 11], "pr": [1, 3, 11, 12], "now": [1, 3, 7, 9, 11, 12], "oper": [1, 5, 6, 7, 9, 11, 12], "set": [1, 3, 6, 9, 11, 12], "up": [1, 3, 5, 6, 7, 11, 12], "assumpt": [1, 5, 6, 7, 9, 11, 12], "test": 1, "eta_": [1, 3, 6, 11, 12], "offdesign": [1, 11], "eta_s_char": [1, 11], "char_func": [1, 11], "extrapol": [1, 11], "check": [1, 4, 11, 12], "run": [1, 3, 7, 9, 11], "design_path": [1, 11], "loop": [1, 11, 12], "over": [1, 8, 9, 11, 12], "rang": [1, 3, 5, 9, 11, 12], "respect": [1, 3, 4, 5, 8, 11, 12], "results_heat_partload": [1, 11], "warn": 1, "root": [1, 3], "471": 1, "minimum": [1, 5, 7, 9], "49": [1, 13], "drop": 1, "vari": [1, 5], "3": [1, 3, 5, 6, 7, 9, 10, 11, 12, 13], "w_": [1, 11], "set_ylim": [1, 8, 11], "05": [1, 3, 8, 11, 12], "set_xlim": [1, 8, 11], "demand": [1, 2, 7, 8, 10, 11], "reset": [1, 11], "nomin": [1, 7, 9], "unset": [1, 3], "constant": [1, 5, 6, 9, 10, 11, 12], "charactersit": 1, "none": [1, 2, 3, 7, 8, 9, 10, 11], "ttd_u": [1, 3, 11], "ka_char": [1, 11], "error": [1, 2, 3], "contain": [1, 3], "componentcharacterist": 1, "attribut": [1, 12], "is_var": 1, "reduc": [1, 11], "less": 1, "mass": [1, 3, 11, 12], "flow": [1, 2, 3, 7, 8, 9, 10, 11, 12], "remain": [1, 7], "unchang": [1, 11], "avail": [1, 2, 5, 12], "surfac": 1, "fix": [1, 2, 3, 9], "compar": [1, 8, 9, 10, 11], "main": [1, 3], "last": [1, 11], "analog": 1, "setup": [1, 6, 7, 11], "ttd_l": [1, 3, 11], "groupedcomponentcharacterist": 1, "relationship": 1, "therefor": [1, 5, 6, 7, 9, 10, 11], "tool": [2, 5, 11], "facilit": 2, "formul": [2, 5], "mix": [2, 5, 6, 11, 13], "integ": [2, 5, 6, 11, 13], "linear": [2, 3, 5, 6, 8, 11, 13], "problem": [2, 5, 6], "dispatch": [2, 4], "unit": [2, 3, 12], "commit": 2, "investment": 2, "sector": [2, 5], "intregr": 2, "energi": [2, 5, 7, 8, 10, 11, 12, 13], "so": [2, 3, 5], "compil": 2, "comprehens": 2, "graph": [2, 12], "base": [2, 3, 6, 9, 11, 12], "descript": [2, 3, 12], "program": [2, 5, 13], "pyomo": [2, 13], "optimis": [2, 5, 13], "choic": 2, "entiti": 2, "bu": [2, 9], "es": [2, 7, 8, 9, 10], "node": 2, "maintain": 2, "technolog": [2, 13], "direct": 2, "edg": 2, "time": [2, 3, 6, 9, 10], "transport": 2, "mini": 2, "code": [2, 3, 4, 12], "buse": 2, "transform": [2, 7, 8, 9, 10, 11], "sourc": [2, 3, 5, 6, 9, 10, 11, 12, 13], "sink": [2, 3, 5, 6, 9, 11], "energysystem": [2, 7, 8, 9, 10], "heat_demand": [2, 9], "8": [2, 3, 8, 9, 10, 12, 13], "timeindex": [2, 9], "create_time_index": 2, "2023": [2, 4, 9, 13], "number": [2, 11], "infer_last_interv": [2, 9], "fals": [2, 3, 8, 9, 10, 11, 12], "b_electr": [2, 9], "electr": [2, 7, 8, 9, 10, 11], "b_heat_35c": [2, 9], "35c": [2, 9], "add": [2, 5, 7, 8, 9, 10, 12], "electricity_grid": [2, 7, 8, 9, 10], "output": [2, 6, 7, 8, 9, 10, 11], "variable_cost": [2, 9], "kwh": [2, 7, 8, 9, 10], "input": [2, 3, 6, 7, 8, 9, 10, 11, 12], "nominal_valu": [2, 7, 8, 9, 10], "kw": [2, 7, 8, 9, 10, 12], "heating_rod": 2, "rod": 2, "name": [2, 9, 11, 12], "unknown": 2, "bound": 2, "upper": [2, 11], "object": [2, 11, 12], "constraint": [2, 3], "variabl": [2, 3, 5, 7, 12], "nonzero": 2, "sens": 2, "minim": [2, 6, 8], "solver": [2, 3, 4, 11], "statu": 2, "ok": 2, "user": [2, 3], "wallclock": 2, "01": [2, 3, 9, 11, 12, 13], "termin": [2, 11, 12], "condit": [2, 5, 11], "messag": 2, "wa": [2, 11], "subject": [2, 5], "toler": 2, "solut": [2, 3, 12], "statist": 2, "branch": 2, "subproblem": 2, "black": [2, 9], "box": [2, 9], "iter": [2, 3], "rc": 2, "07006955146789551": 2, "ordereddict": 2, "heat_suppli": [2, 7, 8, 9, 10], "sequenc": [2, 7, 8, 9, 10], "r": [2, 7, 8, 9, 10, 13], "suppli": [2, 7, 8, 9, 10, 11], "drawstyl": [2, 7, 8, 9, 10], "step": [2, 4, 5, 6, 7, 8, 9, 10, 11, 12], "post": [2, 7, 8, 9, 10], "open": [3, 4, 5, 12, 13], "framework": [3, 5], "convers": [3, 8, 13], "softwar": [3, 5, 11, 12, 13], "predefin": [3, 4, 6, 9], "exhcang": 3, "mani": [3, 5], "build": [3, 6, 11], "wai": [3, 6, 8, 9, 11], "specifi": [3, 9, 11, 12], "paramet": [3, 5, 6, 11, 12], "perform": [3, 5, 6, 9, 12], "steadi": 3, "orient": [3, 6], "eo": 3, "repres": [3, 11], "topolog": [3, 11], "compoent": 3, "specif": [3, 5, 6, 9, 11, 12], "accomplish": 3, "enthalpi": [3, 11, 12], "everi": [3, 11], "miss": [3, 12], "determin": [3, 6, 9, 10, 12], "let": 3, "choos": 3, "instanc": [3, 7, 11, 12], "meet": 3, "other": [3, 5, 7, 12], "block": 3, "class": [3, 11], "children": 3, "them": [3, 4, 8, 9, 11, 12], "take": [3, 11, 12], "place": [3, 9], "principl": 3, "tutori": [3, 6, 9, 11], "recommend": [3, 5], "onlin": [3, 4, 11], "fulli": 3, "steam": 3, "abstract": 3, "represent": [3, 5, 9], "tabl": [3, 11, 12], "summar": [3, 12], "go": [3, 6, 9, 11], "locat": [3, 12], "ga": [3, 12], "100": [3, 10, 11, 12], "kg": 3, "80": [3, 9, 12], "fluid": [3, 9, 11, 12, 13], "p_unit": [3, 11, 12], "bar": [3, 11, 12], "t_unit": [3, 11, 12], "si": 3, "c1": [3, 11, 12], "out1": [3, 11, 12], "in1": [3, 11, 12], "add_conn": [3, 11, 12], "necessari": [3, 6, 8], "start": [3, 11, 12], "residu": 3, "massflow": 3, "82e": 3, "47e": 3, "00": [3, 9, 11, 12], "03e": 3, "06": [3, 12], "37e": 3, "04": [3, 9], "00e": [3, 11, 12], "26e": [3, 11], "33e": 3, "17": [3, 8, 13], "44e": 3, "20e": 3, "50e": 3, "03": [3, 9, 11, 12, 13], "18e": 3, "14e": 3, "32e": 3, "09e": 3, "01e": 3, "29e": 3, "9": [3, 7, 8, 9, 10, 11, 12, 13], "42e": 3, "02": [3, 9, 11, 12], "85e": [3, 11], "55e": 3, "41e": 3, "per": [3, 8, 11], "304": 3, "78": 3, "overview": [3, 5, 6, 12], "print_result": [3, 11, 12], "igva": [3, 11, 12], "94m8": [3, 12], "0m": [3, 12], "94m3": 3, "nan": [3, 11, 12], "h": [3, 11, 12, 13], "94m1": [3, 12], "000e": [3, 11, 12], "366e": 3, "857e": 3, "910e": 3, "494e": 3, "476e": 3, "work": [3, 6, 9, 11, 12, 13], "thing": [3, 12], "could": 3, "outlet": [3, 11, 12], "structur": [3, 11], "long": 3, "abl": [3, 5], "find": [3, 9, 11, 12], "One": [3, 6, 9], "downsid": 3, "initi": [3, 11], "guess": 3, "requir": [3, 4, 5, 6, 8, 11, 12], "bad": 3, "often": 3, "lead": [3, 11], "being": 3, "unabl": 3, "detail": [3, 5, 6, 11, 12], "best": [3, 6, 11], "practic": 3, "70": 3, "iterinfo": [3, 11, 12], "64e": 3, "67e": 3, "621e": 3, "94m7": 3, "invalid": 3, "inlet": [3, 11, 12], "overdetermin": 3, "try": 3, "singular": 3, "jacobian": 3, "matrix": 3, "abort": 3, "sure": [3, 4], "ani": [3, 5, 7, 9, 11, 12], "parametris": 3, "might": [3, 7, 11, 12], "accur": 3, "logarithm": 3, "ka": [3, 11, 12], "support": 3, "better": 3, "fuel": 3, "combust": 3, "chamber": 3, "small": [3, 7, 13], "zero": 3, "shown": [3, 4, 8, 9, 12], "air": [3, 6, 9, 11, 12, 13], "list": 3, "similar": [3, 8, 10, 11], "heatexchang": [3, 11], "parametr": [3, 11], "accord": [3, 11, 12], "flowsheet": [3, 11, 12], "so_wf": 3, "si_wf": 3, "so_air": 3, "si_air": 3, "eva": 3, "c3": [3, 11, 12], "in2": [3, 11], "out2": [3, 11], "40": [3, 9, 10, 11, 12], "273": [3, 9, 10, 11], "15": [3, 9, 10, 11, 13], "pr1": [3, 11], "pr2": [3, 11], "25": 3, "td_log": [3, 11], "zeta1": [3, 11], "zeta2": [3, 11], "02e": 3, "63e": 3, "36e": 3, "063e": [3, 11], "033e": 3, "94m4": [3, 12], "073e": 3, "745e": 3, "937e": 3, "94m0": 3, "749e": 3, "simulaton": 3, "both": [3, 5, 9, 11], "hot": 3, "side": [3, 12], "cold": 3, "adjust": [3, 12], "automat": 3, "9999999999998863": 3, "t_evapor": 3, "t_air": 3, "round": [3, 12], "reli": [3, 11], "properti": [3, 5, 12, 13], "larg": [3, 7], "varieti": 3, "extens": 3, "background": 3, "http": [3, 4, 11, 13], "readthedoc": 3, "io": [3, 11], "oemof": [3, 4, 6, 13], "forum": 3, "discuss": 3, "fraction": [3, 12], "mixtur": 3, "learn": [4, 5], "how": [4, 5, 6, 7, 11], "prepar": [4, 5, 9], "favorit": 4, "distribut": [4, 5], "editor": 4, "machin": 4, "A": [4, 5, 6, 11, 13], "lightweight": 4, "miniforg": 4, "clone": 4, "git": 4, "com": 4, "fwitt": 4, "workshop": [4, 12], "osms": 4, "miniforge3": 4, "prompt": 4, "navig": 4, "folder": 4, "path": 4, "conda": 4, "env": 4, "yml": 4, "activ": 4, "usag": [4, 11], "solph": [4, 5, 6, 13], "instruct": 4, "person": [4, 5, 12], "edit": [4, 13], "vs": [4, 10], "browser": 4, "about": [4, 11, 12], "describ": [4, 12], "abov": [4, 5, 11], "NOT": [4, 5, 11], "cours": 4, "singl": [4, 6, 7, 11, 12], "rudimentari": 4, "advanc": 4, "occas": 4, "file": [4, 5, 12], "those": [4, 9, 11, 12], "util": [4, 7, 8, 9, 10], "welcom": 5, "session": 5, "2nd": 5, "intern": [5, 6, 9, 13], "francesco": [5, 13], "witt": [5, 13], "patrik": [5, 13], "sch\u00f6nfeld": 5, "german": 5, "areospac": 5, "center": 5, "dlr": 5, "institut": 5, "most": [5, 6, 9], "know": [5, 9, 11], "librari": [5, 9, 12, 13], "context": 5, "analysi": [5, 11], "like": 5, "content": [5, 7, 8, 9, 10], "pull": 5, "request": 5, "consid": [5, 6, 11], "one": [5, 9, 11, 12], "major": 5, "kei": [5, 11], "decarbon": 5, "usual": 5, "thu": 5, "becom": [5, 11], "task": 5, "variou": [5, 6], "tempor": 5, "spatial": 5, "scope": 5, "integr": [5, 6, 11], "curv": [5, 11], "pre": [5, 12], "carnot": [5, 9, 12], "assum": [5, 6, 7, 9], "account": [5, 6, 11, 12], "Such": 5, "literatur": 5, "databas": [5, 6], "hp_lib": 5, "good": [5, 11], "gener": [5, 11, 13], "manufactur": [5, 6, 11], "fall": 5, "short": 5, "should": [5, 11], "industri": [5, 13], "novel": 5, "research": [5, 9, 13], "applic": [5, 9, 11], "dedic": [5, 6, 11], "fill": 5, "gap": 5, "combin": [5, 6, 7, 11], "order": 5, "improv": [5, 12], "popular": 5, "conceptu": 5, "divid": [5, 12], "pick": 5, "broadli": 5, "built": [5, 6], "third": [5, 13], "modifi": [5, 11], "enabl": 5, "within": 5, "full": 5, "emploi": 5, "piec": [5, 6], "wise": 5, "basic": 5, "knowledg": [5, 6], "furthermor": [5, 11], "understand": 5, "physic": 5, "self": 5, "numer": [5, 11], "websit": 5, "give": [5, 11], "special": 5, "thank": 5, "awesom": 5, "commun": 5, "independ": 5, "put": 5, "amaz": 5, "word": 5, "wide": [5, 12], "mit": 5, "copyright": 5, "sch\u00f6nfeldt": 5, "permiss": 5, "herebi": 5, "grant": 5, "free": 5, "charg": 5, "copi": 5, "associ": 5, "deal": 5, "without": [5, 9, 11], "restrict": [5, 11], "includ": 5, "limit": [5, 11], "merg": 5, "publish": 5, "sublicens": 5, "sell": 5, "permit": 5, "whom": 5, "furnish": 5, "notic": 5, "shall": 5, "substanti": 5, "portion": 5, "THE": 5, "IS": 5, "AS": 5, "warranti": 5, "OF": 5, "kind": 5, "OR": 5, "impli": 5, "BUT": 5, "TO": 5, "merchant": 5, "fit": 5, "FOR": 5, "particular": 5, "purpos": 5, "AND": 5, "noninfring": 5, "IN": 5, "NO": 5, "event": 5, "author": 5, "holder": 5, "BE": 5, "liabl": 5, "claim": 5, "damag": 5, "liabil": 5, "whether": [5, 11], "action": 5, "contract": 5, "tort": 5, "otherwis": 5, "aris": 5, "WITH": 5, "domest": 6, "focuss": 6, "These": [6, 11], "deriv": [6, 11], "datasheet": [6, 9, 10, 12], "distinct": 6, "product": [6, 7, 8, 9, 12, 13], "form": 6, "produc": 6, "absolut": 6, "posit": 6, "sign": [6, 12], "convent": [6, 12], "challeng": 6, "real": 6, "world": 6, "mostli": [6, 9], "link": 6, "actual": [6, 9, 10, 11, 12], "hp": [6, 12], "mai": [6, 11], "attempt": [6, 11], "profil": 6, "target": 6, "seri": [6, 9, 10, 13], "outcom": [6, 7, 9, 11], "done": [6, 8, 11], "directli": 6, "addit": 6, "taken": [6, 11], "consider": 6, "chapter": [6, 11, 12], "effic": 6, "sheet": 6, "four": 6, "match": [6, 11, 12], "exchang": [6, 9, 11, 12], "regim": [6, 11], "carri": 6, "simlat": 6, "introduc": [6, 7, 12], "previou": [6, 8, 10, 11, 12], "simpli": [6, 12], "ad": 6, "affect": [6, 7, 11], "new": [6, 11], "introduct": 7, "until": 7, "deliv": [7, 12], "amount": [7, 11], "capac": [7, 9], "hold": [7, 11], "especi": [7, 11], "scale": [7, 11], "plant": 7, "overal": [7, 8, 11, 12], "blur": 7, "recreat": 7, "latest": 7, "least": [7, 11], "50": [7, 11], "load_input_data": [7, 8, 9, 10], "create_energy_system_stub": [7, 8, 10], "input_data": [7, 8, 9, 10], "head": [7, 8, 9, 10], "24": [7, 8, 9, 10], "bus_electr": [7, 8, 10], "bus_heat_35c": [7, 8, 10], "thermal_storag": [7, 8, 9, 10], "load_tespy_cop": [7, 10], "tespy_cop": [7, 10], "d": [7, 8, 10, 12, 13], "map": [7, 8, 10], "modif": [7, 8, 11], "constrain": 7, "nonconvex": [7, 8], "binari": [7, 12], "untouch": 7, "hp_thermal_pow": [7, 8, 9, 10], "heat_pump": [7, 8, 9, 10], "conversion_factor": [7, 9, 10], "storage_cont": [7, 8, 9, 10], "sort": [7, 8, 9, 10], "b": [7, 8, 9, 10], "ylabel": [7, 8, 9, 10], "k": [7, 8, 9, 10, 13], "storag": [7, 8, 10], "electricity_consumpt": [7, 8, 9, 10], "float": [7, 8, 9, 10, 11], "print": [7, 8, 9, 10, 12], "1f": [7, 8, 9, 10], "33": 7, "offsettransform": [8, 11], "offset": [8, 11], "nonlinear": 8, "visual": 8, "e_": 8, "eta": [8, 12], "e_0": 8, "load_tespy_coeffici": 8, "tail": 8, "tespy_coeffici": 8, "heat_production_rang": 8, "1e3": [8, 11, 12], "compressor_pow": 8, "myst_nb": [8, 9, 10], "glue": [8, 9, 10], "heatpump": 8, "onto": 8, "had": [8, 11], "version": 8, "rate": 9, "genericstorag": 9, "loss_rat": 9, "nominal_storage_capac": 9, "spread": 9, "m\u00b3": 9, "volum": [9, 13], "timeseri": [9, 10], "30": [9, 11], "85": 9, "75": [9, 11], "65": 9, "length": 9, "71": 9, "dtype": [9, 11], "float64": 9, "quick": 9, "a7": 9, "w35": 9, "what": [9, 11], "35": [9, 11], "under": 9, "datasheet_cop": [9, 10], "carnot_cop_7_35": 9, "cpf_7_35": 9, "cpf": [9, 10], "ttd_heat_exchang": 9, "heating_system_feed_temp": 9, "ttd": 9, "howver": 9, "note": [9, 12], "maximum": 9, "water": [9, 11], "cannot": [9, 11], "happen": 9, "mea": 9, "carnot_cop_2_40": [9, 10], "cpf_2_40": [9, 10], "arang": [9, 11, 12], "cop_7_35": 9, "cop_2_40": 9, "numref": 9, "yield": 9, "variant": [9, 11], "sharei": 9, "figsiz": 9, "timestep": 9, "read": 10, "fromt": 10, "he": [10, 11], "interpol": 10, "pass": 10, "readi": 10, "energysysten": 10, "space": 10, "lookup": [10, 11], "327825": 10, "99": 10, "334274": 10, "98": 10, "340723": 10, "97": 10, "347171": 10, "96": 10, "353620": 10, "306": 10, "577904": 10, "307": 10, "308": 10, "309": 10, "310": 10, "411": 10, "row": 10, "thei": [10, 11], "expect": [10, 11], "veri": [10, 11], "set_color": 10, "timestamp": 10, "ax2": 10, "twinx": 10, "simultan": 11, "fed": 11, "modul": 11, "rtfd": 11, "predict": 11, "remian": 11, "degre": [11, 12], "freedom": [11, 12], "control": 11, "anymor": 11, "concern": 11, "outlin": 11, "goin": 11, "temperatud": 11, "etc": 11, "heatexchangersimpl": [11, 12], "feed": 11, "logger": 11, "define_log": 11, "screen_level": 11, "cycleclos": [11, 12], "ref": 11, "wf": [11, 12], "cc": [11, 12], "closer": [11, 12], "so1": 11, "si1": 11, "so2": 11, "si2": 11, "c0": [11, 12], "c21": 11, "c22": 11, "skip": 11, "due": [11, 12], "instabl": 11, "imposs": 11, "nativ": 11, "stabl": [11, 13], "converg": 11, "behavior": 11, "q_design": 11, "675": 11, "t_ambient_design": 11, "rerun": 11, "tmp": 11, "86e": 11, "75e": 11, "72e": [11, 12], "10e": [11, 12], "21e": 11, "mass_devi": [11, 12], "fluid_devi": [11, 12], "24e": 11, "92e": 11, "zeta": [11, 12], "68e": [11, 12], "04e": 11, "683e": 11, "041e": [11, 12], "071e": [11, 12], "771e": [11, 12], "369e": [11, 12], "463e": 11, "453e": 11, "601e": 11, "043e": 11, "355e": [11, 12], "260e": 11, "469e": 11, "500e": 11, "v": 11, "vol": 11, "td_bp": 11, "026834": 11, "040999": 11, "307147": 11, "999599": 11, "000000": 11, "000708": 11, "026391": 11, "1389": 11, "278120": 11, "745114e": 11, "577063": 11, "427393": 11, "002445": 11, "091112": 11, "2370": 11, "253689": 11, "000000e": 11, "694204": 11, "646266": 11, "316995": 11, "54": 11, "530607": 11, "000981": 11, "036554": 11, "2439": 11, "993233": 11, "000057": 11, "002139": 11, "1359": 11, "354602": 11, "209052e": 11, "600738": 11, "406330": 11, "818533": 11, "894125": 11, "803759": 11, "3821": 11, "630622": 11, "404319": 11, "289111": 11, "873397": 11, "798002": 11, "3814": 11, "424683": 11, "435516": 11, "126003": 11, "690095": 11, "000437": 11, "001004": 11, "436": 11, "664733": 11, "146898": 11, "420888": 11, "000438": 11, "001006": 11, "505": 11, "027895": 11, "stai": 11, "through": 11, "alreadi": 11, "repeat": 11, "results_temperatur": 11, "trend": 11, "saw": 11, "rel": 11, "span": 11, "minumum": 11, "obviou": 11, "neither": 11, "nor": 11, "jmade": 11, "realli": 11, "alwai": 11, "independet": 11, "construct": 11, "access": [11, 13], "bsa": 11, "current": 11, "togeth": 11, "ont": 11, "default": 11, "written": 11, "stone": 11, "appropri": 11, "measur": 11, "custom": 11, "results_temperature_partload": 11, "befor": 11, "partload": 11, "low": [11, 13], "high": 11, "nearli": 11, "correct": [11, 12], "someth": 11, "wrong": 11, "1857": 11, "010557": 11, "716565": 11, "900349": 11, "earlier": [11, 12], "against": 11, "simluaiton": 11, "quit": 11, "seem": 11, "odd": 11, "becaus": 11, "indic": [11, 12], "sought": 11, "faster": 11, "behaviour": 11, "equal": 11, "000": 11, "9100": 11, "init_path": 11, "els": [11, 12], "10th": 11, "ambienht": 11, "power_max": 11, "cop_max": 11, "temp": 11, "amb": 11, "str": [11, 12], "squar": 11, "packag": 11, "y": 11, "axi": 11, "least_squar": 11, "vstack": 11, "ones": 11, "len": 11, "linalg": [11, 13], "lstsq": [11, 13], "rcond": 11, "select": 11, "16": 11, "astyp": 11, "yy_tespi": 11, "cop_c_simpl": 11, "eta_c_simpl": 11, "5945": 11, "yy_offset": 11, "get": 11, "extract": [11, 12], "arrai": [11, 13], "get_color": 11, "invert": 11, "export": [11, 12], "csv": [11, 12], "format": 11, "swap": 11, "export_df": 11, "to_csv": [11, 12], "made": 12, "temperatr": 12, "neg": 12, "boundari": 12, "h_2": 12, "h_1": 12, "wirst": 12, "postprocess": 12, "besid": 12, "stream": 12, "aspect": 12, "futur": 12, "l": [12, 13], "ks": 12, "tamb": 12, "48e": 12, "59e": 12, "94m": 12, "99e": 12, "62e": 12, "74e": 12, "772e": 12, "94m2": 12, "956e": 12, "either": 12, "1618": 12, "4579721423017": 12, "622635963759143": 12, "coulp": 12, "keep": 12, "screw": 12, "67": [12, 13], "search": 12, "eta_s_max": 12, "eta_s_min": 12, "elif": 12, "break": 12, "found": 12, "900349094422374": 12, "On": 12, "formula": 12, "t_for_eta": 12, "eta_const": 12, "orang": 12, "easili": 12, "expectedli": 12, "minor": 12, "entropi": 12, "usabl": 12, "uw": 13, "krien": 13, "sch": 13, "\u00f6": 13, "nfeldt": 13, "jann": 13, "launer": 13, "simon": 13, "hilpert": 13, "cord": 13, "kaldemey": 13, "guido": 13, "ple": 13, "\u00df": 13, "mann": 13, "impact": 13, "100028": 13, "novemb": 13, "2020": 13, "doi": 13, "1016": 13, "j": 13, "simpa": 13, "ilja": 13, "tuschi": 13, "hermal": 13, "ngineer": 13, "ystem": 13, "ython": 13, "journal": 13, "2178": 13, "21105": 13, "joss": 13, "02178": 13, "hauk": 13, "hoop": 13, "tjarko": 13, "tjaden": 13, "kai": 13, "sken": 13, "re": 13, "lab": 13, "project": 13, "hplib": 13, "v1": 13, "2022": 13, "5281": 13, "zenodo": 13, "6792486": 13, "william": 13, "hart": 13, "jean": 13, "paul": 13, "watson": 13, "david": 13, "woodruff": 13, "mathemat": 13, "comput": 13, "219": 13, "2011": 13, "michael": 13, "bynum": 13, "gabriel": 13, "hackebeil": 13, "carl": 13, "laird": 13, "bethani": 13, "nicholson": 13, "john": 13, "siirola": 13, "springer": 13, "scienc": 13, "busi": 13, "media": 13, "2021": 13, "mathia": 13, "hofmann": 13, "juliu": 13, "meier": 13, "georg": 13, "tsatsaroni": 13, "ener": 13, "o": 13, "pen": 13, "ourc": 13, "xergi": 13, "nalysi": 13, "xtend": 13, "imul": 13, "ramework": 13, "4087": 13, "3390": 13, "en15114087": 13, "ian": 13, "bell": 13, "jorrit": 13, "wronski": 13, "sylvain": 13, "quoilin": 13, "vincent": 13, "lemort": 13, "pure": 13, "pseudo": 13, "thermophys": 13, "evalu": 13, "engin": 13, "chemistri": 13, "53": 13, "2498": 13, "2508": 13, "2014": 13, "1021": 13, "ie4033999": 13, "vitoc": 13, "150": 13, "url": 13, "www": 13, "viessmann": 13, "co": 13, "uk": 13, "en": 13, "150a": 13, "html": 13, "charl": 13, "harri": 13, "jarrod": 13, "millman": 13, "st": 13, "\u00e9": 13, "fan": 13, "van": 13, "der": 13, "walt": 13, "ralf": 13, "gommer": 13, "pauli": 13, "virtanen": 13, "cournapeau": 13, "eric": 13, "wieser": 13, "julian": 13, "taylor": 13, "sebastian": 13, "berg": 13, "nathaniel": 13, "smith": 13, "robert": 13, "kern": 13, "matti": 13, "picu": 13, "stephan": 13, "hoyer": 13, "marten": 13, "kerkwijk": 13, "matthew": 13, "brett": 13, "allan": 13, "haldan": 13, "jaim": 13, "fern": 13, "\u00e1": 13, "ndez": 13, "del": 13, "\u00ed": 13, "mark": 13, "wieb": 13, "pearu": 13, "peterson": 13, "pierr": 13, "rard": 13, "marchant": 13, "kevin": 13, "sheppard": 13, "tyler": 13, "reddi": 13, "warren": 13, "weckess": 13, "hameer": 13, "abbasi": 13, "christoph": 13, "gohlk": 13, "travi": 13, "oliph": 13, "natur": 13, "585": 13, "7825": 13, "357": 13, "362": 13, "septemb": 13, "1038": 13, "s41586": 13, "020": 13, "2649": 13, "org": 13, "doc": 13, "tabor": 13, "bronicki": 13, "establish": 13, "criteria": 13, "vapor": 13, "sae": 13, "paper": 13, "januari": 13, "1964": 13, "4271": 13, "640823": 13, "econom": 13, "survei": 13, "organ": 13, "rankin": 13, "european": 13, "confer": 13, "manag": 13, "april": 13, "2009": 13, "hdl": 13, "handl": 13, "net": 13, "2268": 13, "14609": 13, "huijuan": 13, "chen": 13, "yogi": 13, "goswami": 13, "elia": 13, "stefanako": 13, "review": 13, "grade": 13, "renew": 13, "sustain": 13, "3059": 13, "3067": 13, "decemb": 13, "2010": 13, "rser": 13, "07": 13, "006": 13, "bo": 13, "tau": 13, "liu": 13, "kuo": 13, "hsiang": 13, "chien": 13, "chi": 13, "chuan": 13, "wang": 13, "wast": 13, "recoveri": 13, "29": 13, "1207": 13, "1217": 13, "june": 13, "2004": 13, "004": 13}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"entropi": 0, "analysi": 0, "cop": [0, 6], "introduct": [0, 11, 12], "carnot": [0, 6], "irrevers": 0, "product": [0, 11], "investig": 0, "work": [0, 4], "fluid": 0, "disect": 1, "partload": [1, 8], "effici": [1, 8], "effect": 1, "compressor": [1, 3], "evapor": 1, "heat": [1, 3, 9, 10, 11, 12], "transfer": 1, "coeffic": 1, "condens": 1, "5": [2, 3], "minut": [2, 3], "oemof": [2, 5, 7, 8, 9, 10, 11], "solph": [2, 7, 8, 9, 10, 11, 12], "gener": [2, 3, 9], "inform": [2, 3], "tespi": [3, 10, 11, 12], "mini": 3, "exampl": 3, "model": [3, 6, 7, 8, 9, 10, 11, 12], "exchang": 3, "learn": 3, "more": 3, "setup": [4, 9], "your": 4, "python": 4, "environ": 4, "instal": 4, "jupyt": 4, "notebook": 4, "workshop": [5, 6], "osms": 5, "2023": 5, "abstract": 5, "structur": 5, "tutori": 5, "teach": 5, "method": [5, 6], "precondit": 5, "particip": 5, "acknowledg": 5, "licens": 5, "scope": 6, "thermodynam": 6, "simul": [6, 11], "tabl": 6, "content": 6, "minim": 7, "load": [7, 11], "variabl": [8, 11], "linear": 9, "pump": [9, 10, 12], "build": [9, 10, 12], "storag": 9, "demand": 9, "optim": 9, "energi": 9, "system": 9, "combin": 10, "run": [10, 12], "part": 11, "perform": 11, "prepar": [11, 12], "design": 11, "mode": 11, "influenc": 11, "ambient": 11, "temperatur": 11, "data": 11, "simpl": 12, "result": 12, "literatur": 13, "refer": 13}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})