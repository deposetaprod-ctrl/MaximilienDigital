import re

with open("temp_body_new.html", "r", encoding="utf-8", errors="ignore") as f:
    html = f.read()

dialog_match = re.search(r'(<dialog id="brief".*?</dialog>)', html, re.IGNORECASE | re.DOTALL)

with open("dialog_html.txt", "w", encoding="utf-8") as f:
    if dialog_match:
        f.write(dialog_match.group(1))
    else:
        f.write("Dialog not found")
