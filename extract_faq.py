import re

with open("temp_body_new.html", "r", encoding="utf-8", errors="ignore") as f:
    html = f.read()

faq_match = re.search(r'(<section class="faq".*?</section>)', html, re.IGNORECASE | re.DOTALL)

with open("faq_html.txt", "w", encoding="utf-8") as f:
    if faq_match:
        f.write(faq_match.group(1))
    else:
        f.write("Faq not found")
