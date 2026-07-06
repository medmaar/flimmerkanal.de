import os

HEAD_COMMON = '''<link rel="icon" href="{root}favicon.ico" sizes="any">
<link rel="icon" href="{root}assets/icon-192.png" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="{root}assets/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{root}assets/style.css">
'''

HEADER = '''<header>
  <div class="wrap nav">
    <a href="{root}index.html"><img src="{root}assets/logo.svg" alt="Flimmerkanal" height="34" style="height:34px;width:auto;"></a>
    <nav class="nav-links">
      <a href="{root}seo/kanaele.html">Kanäle</a>
      <a href="{root}index.html#preise">IPTV Abo</a>
      <a href="{root}seo/iptv-test.html">Kostenloser Test</a>
      <a href="{root}kontakt.html">Kontakt</a>
    </nav>
    <a class="btn btn-primary" href="{root}index.html#preise">IPTV kaufen</a>
  </div>
</header>
'''

FOOTER = '''<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-col">
        <img src="{root}assets/logo.svg" alt="Flimmerkanal" height="30" style="height:30px;width:auto;margin-bottom:14px;">
        <p style="color:var(--text-dim);font-size:14px;max-width:280px;">IPTV Anbieter aus Deutschland. Über 20.000 Kanäle, stabiler Server, deutscher Support.</p>
      </div>
      <div class="foot-col">
        <h4>Produkt</h4>
        <a href="{root}index.html#preise">IPTV Abo &amp; Preise</a>
        <a href="{root}seo/kanaele.html">Kanalliste</a>
        <a href="{root}seo/iptv-test.html">Kostenloser IPTV Test</a>
        <a href="{root}seo/installationsanleitung.html">Installationsanleitung</a>
      </div>
      <div class="foot-col">
        <h4>Ratgeber</h4>
        <a href="{root}seo/iptv-kaufen.html">IPTV kaufen</a>
        <a href="{root}seo/iptv-anbieter.html">IPTV Anbieter Vergleich</a>
        <a href="{root}seo/iptv-abo.html">IPTV Abo Laufzeiten</a>
        <a href="{root}kontakt.html">Kontakt</a>
      </div>
      <div class="foot-col">
        <h4>Rechtliches</h4>
        <a href="{root}legal/impressum.html">Impressum</a>
        <a href="{root}legal/datenschutz.html">Datenschutz</a>
        <a href="{root}legal/agb.html">AGB</a>
        <a href="{root}legal/widerruf.html">Widerrufsrecht</a>
      </div>
    </div>
    <div class="foot-bottom">
      <div>&copy; 2026 Flimmerkanal. Alle Rechte vorbehalten.</div>
      <div>IPTV-Technologie ist legal; die Rechtmäßigkeit der übertragenen Inhalte liegt in der Verantwortung des jeweiligen Rechteinhabers und Anbieters.</div>
    </div>
  </div>
</footer>
<script src="{root}assets/main.js"></script>
'''

def build_page(path, title, description, canonical, h1, body_html, root, extra_head="", extra_schema=""):
    head = HEAD_COMMON.format(root=root)
    header = HEADER.format(root=root)
    footer = FOOTER.format(root=root)
    html = f'''<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="{canonical}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:type" content="website">
{head}{extra_head}{extra_schema}
</head>
<body>
{header}
<div class="page-content">
  <div class="wrap">
    <div class="breadcrumb"><a href="{root}index.html">Startseite</a> / {h1}</div>
    <h1>{h1}</h1>
    {body_html}
  </div>
</div>
{footer}
</body>
</html>
'''
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print("wrote", path)

print("template module ready")
