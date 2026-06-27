import os
import re
from html.parser import HTMLParser

with open("it.html", "r", encoding="utf-8") as f:
    content = f.read()

# We will use regex to find all <div class="page" id="page-xxx"> blocks.
# But regex for nested HTML is hard.
