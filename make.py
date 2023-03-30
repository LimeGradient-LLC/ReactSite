import sys
import os

# Only used for committing to the github repo

os.system("git add .")
os.system(f"git commit -m '{sys.argv[1]}'")
os.system("git branch -M main")
os.system("git push -u origin main")