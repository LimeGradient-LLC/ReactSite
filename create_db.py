import os
import pathlib
import json

directory = os.fsencode("api/kanyewest")
subdirs = [x[0] for x in os.walk('public/api/kanyewest')]

files = []
for sdir in subdirs:
    _files = os.listdir(sdir)
    files.append(_files)

files.pop(0)
for f in files:
    f.sort()

with open("public/api/kanyewest/db.json", "w") as f:
    json.dump(files, f, indent=2)