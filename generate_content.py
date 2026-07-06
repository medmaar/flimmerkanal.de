import sys
sys.path.insert(0, ".")
from build_pages import build_page

BASE = "https://www.flimmerkanal.de/"

# ---------------------------------------------------------------- LEGAL ----
legal_note = '''<div class="legal-note"><strong>Hinweis:</strong> Diese Seite ist eine Vorlage und ersetzt keine Rechtsberatung. Alle mit [Platzhalter] markierten Angaben müssen durch die echten Daten des Unternehmens ersetzt werden, bevor die Website veröffentlicht wird. Für ein rechtssicheres Impressum, AGB und Datenschutzerklärung empfehlen wir einen Fachanwalt oder einen etablierten Generator-Dienst.</div>'''

build_page(
  "legal/impressum.html",
  "Impressum – Flimmerkanal",
  "Impressum von Flimmerkanal gemäß § 5 TMG.",
  BASE+"legal/impressum.html",
  "Impressum",
  legal_note + '''
  <h2>Angaben gemäß § 5 TMG</h2>
  <p>[Platzhalter: Firmenname / Name des Betreibers]<br>
  [Platzhalter: Straße und Hausnummer]<br>
  [Platzhalter: Postleitzahl und Ort]<br>
  [Platzhalter: Land]</p>
  <h2>Kontakt</h2>
  <p>Telefon: [Platzhalter]<br>
  E-Mail: [Platzhalter]</p>
  <h2>Umsatzsteuer-ID</h2>
  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [Platzhalter, falls vorhanden]</p>
  <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
  <p>[Platzhalter: Name und Anschrift]</p>
  <h2>Streitschlichtung</h2>
  <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">ec.europa.eu/consumers/odr</a>. 
  Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, sofern hier nichts anderes angegeben ist.</p>
  ''',
  "/"
)

build_page(
  "legal/datenschutz.html",
  "Datenschutzerklärung – Flimmerkanal",
  "Datenschutzerklärung von Flimmerkanal gemäß DSGVO.",
  BASE+"legal/datenschutz.html",
  "Datenschutzerklärung",
  legal_note + '''
  <h2>1. Verantwortlicher</h2>
  <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br>
  [Platzhalter: Firmenname, Anschrift, E-Mail]</p>
  <h2>2. Welche Daten wir verarbeiten</h2>
  <p>Wir verarbeiten personenbezogene Daten, die Sie uns über unser Kontaktformular, per E-Mail oder beim Abschluss eines IPTV Abos mitteilen, insbesondere Name, E-Mail-Adresse und Zahlungsinformationen (verarbeitet über [Platzhalter: Zahlungsdienstleister]).</p>
  <h2>3. Zweck der Verarbeitung</h2>
  <p>Die Verarbeitung erfolgt zur Vertragserfüllung (Bereitstellung des IPTV Abos), zur Kundenkommunikation und, sofern eingesetzt, zu Analysezwecken zur Verbesserung unseres Angebots.</p>
  <h2>4. Cookies</h2>
  <p>Diese Website kann technisch notwendige Cookies sowie, sofern eingebunden, Analyse- oder Marketing-Cookies verwenden. Nicht notwendige Cookies werden nur mit Ihrer Einwilligung gesetzt.</p>
  <h2>5. Ihre Rechte</h2>
  <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gemäß Art. 15–21 DSGVO. Wenden Sie sich hierzu an [Platzhalter: Kontakt-E-Mail].</p>
  <h2>6. Beschwerderecht</h2>
  <p>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt.</p>
  ''',
  "/"
)

build_page(
  "legal/agb.html",
  "AGB – Allgemeine Geschäftsbedingungen | Flimmerkanal",
  "Allgemeine Geschäftsbedingungen für IPTV Abos von Flimmerkanal.",
  BASE+"legal/agb.html",
  "Allgemeine Geschäftsbedingungen (AGB)",
  legal_note + '''
  <h2>§1 Geltungsbereich</h2>
  <p>Diese AGB gelten für alle Verträge über IPTV Abos, die zwischen [Platzhalter: Firmenname] ("Anbieter") und dem Kunden über diese Website geschlossen werden.</p>
  <h2>§2 Vertragsschluss und Leistung</h2>
  <p>Mit Abschluss der Bestellung und Zahlungseingang erhält der Kunde Zugangsdaten zum IPTV-Dienst für die gewählte Laufzeit und Geräteanzahl. Der Umfang der Kanäle und Inhalte kann sich ändern.</p>
  <h2>§3 Preise und Zahlung</h2>
  <p>Es gelten die zum Zeitpunkt der Bestellung auf der Website ausgewiesenen Preise für die jeweilige Laufzeit (1, 3, 6 oder 12 Monate) und Geräteanzahl (1–5 Geräte). Alle Preise verstehen sich als Endpreise, sofern nicht anders angegeben.</p>
  <h2>§4 Laufzeit und Kündigung</h2>
  <p>Abos verlängern sich nicht automatisch, sofern nicht ausdrücklich vereinbart. Nach Ablauf der gewählten Laufzeit endet der Zugang, sofern kein neues Abo abgeschlossen wird.</p>
  <h2>§5 Haftung</h2>
  <p>Der Anbieter haftet nicht für vorübergehende Ausfälle einzelner Kanäle, die außerhalb seines Einflussbereichs liegen (z. B. Ausfälle beim Rechteinhaber). Im Übrigen haftet der Anbieter nach den gesetzlichen Bestimmungen.</p>
  <h2>§6 Schlussbestimmungen</h2>
  <p>Es gilt das Recht der Bundesrepublik Deutschland. Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
  ''',
  "/"
)

build_page(
  "legal/widerruf.html",
  "Widerrufsrecht – Flimmerkanal",
  "Informationen zum Widerrufsrecht bei digitalen IPTV Abos.",
  BASE+"legal/widerruf.html",
  "Widerrufsbelehrung",
  legal_note + '''
  <h2>Widerrufsrecht</h2>
  <p>Verbrauchern steht grundsätzlich ein Widerrufsrecht von 14 Tagen ab Vertragsschluss zu. Die Frist beginnt mit dem Tag des Vertragsschlusses.</p>
  <h2>Erlöschen des Widerrufsrechts</h2>
  <p>Das Widerrufsrecht erlischt vorzeitig, wenn der Anbieter mit der Ausführung des Vertrags (Freischaltung des IPTV-Zugangs) begonnen hat, nachdem der Kunde ausdrücklich zugestimmt hat, dass der Anbieter vor Ablauf der Widerrufsfrist mit der Vertragserfüllung beginnt, und der Kunde seine Kenntnis davon bestätigt hat, dass er durch seine Zustimmung mit Beginn der Ausführung des Vertrags sein Widerrufsrecht verliert.</p>
  <h2>Ausübung des Widerrufs</h2>
  <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns ([Platzhalter: Firmenname, Anschrift, E-Mail]) mittels einer eindeutigen Erklärung (z. B. per E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
  ''',
  "/"
)

# --------------------------------------------------------------- SEO -----

build_page(
  "seo/iptv-kaufen.html",
  "IPTV kaufen – Sicher &amp; Schnell bei Flimmerkanal | IPTV Anbieter Deutschland",
  "IPTV kaufen in wenigen Minuten: 20.000+ Kanäle, 4K-Qualität, deutscher Support. Jetzt IPTV Abo bei Flimmerkanal sichern.",
  BASE+"seo/iptv-kaufen.html",
  "IPTV kaufen – so einfach geht's",
  '''
  <p>Wer heute <strong>IPTV kaufen</strong> möchte, hat die Wahl zwischen unzähligen Anbietern unterschiedlicher Qualität. Flimmerkanal ist ein <a href="../index.html">IPTV Anbieter aus Deutschland</a>, der auf stabile Server, ehrliche Preise und schnellen Zugang setzt.</p>

  <h2>So läuft der Kauf ab</h2>
  <ul>
    <li>Laufzeit wählen: 1, 3, 6 oder 12 Monate</li>
    <li>Geräteanzahl wählen: 1 bis 5 gleichzeitige Verbindungen</li>
    <li>Bezahlen und Zugangsdaten innerhalb weniger Minuten erhalten</li>
    <li>Per <a href="installationsanleitung.html">Installationsanleitung</a> auf Smart-TV, Fire TV Stick, Android-Box oder Smartphone einrichten</li>
  </ul>

  <h2>Warum IPTV kaufen statt klassisches Kabel-TV?</h2>
  <p>Klassisches Kabel- oder Satellitenfernsehen ist an Hardware und feste Verträge gebunden. IPTV läuft über Ihre bestehende Internetverbindung und lässt sich monatlich, halbjährlich oder jährlich buchen – ganz ohne Techniker-Termin.</p>

  <h2>Preise auf einen Blick</h2>
  <p>Die Kosten hängen von Laufzeit und Geräteanzahl ab. Ein Einzelgerät-Abo beginnt bereits ab 9 € im Monat. Die vollständige <a href="../index.html#preise">Preisübersicht mit allen Laufzeiten</a> finden Sie auf unserer Startseite.</p>

  <h2>Bevor Sie kaufen: kostenlos testen</h2>
  <p>Sie müssen nicht blind kaufen. Mit unserem <a href="iptv-test.html">kostenlosen IPTV Test</a> prüfen Sie Bildqualität und Stabilität, bevor Sie sich festlegen.</p>
  ''',
  "../"
)

build_page(
  "seo/iptv-anbieter.html",
  "IPTV Anbieter Vergleich – Worauf Sie 2026 achten sollten | Flimmerkanal",
  "IPTV Anbieter in Deutschland vergleichen: Serverstabilität, Kanalanzahl, Support und Preis. So erkennen Sie einen seriösen IPTV Anbieter.",
  BASE+"seo/iptv-anbieter.html",
  "IPTV Anbieter Vergleich: Worauf Sie achten sollten",
  '''
  <p>Der Markt für <strong>IPTV Anbieter</strong> in Deutschland ist unübersichtlich. Nicht jeder Anbieter, der viele Kanäle verspricht, liefert auch stabile Streams. Diese Checkliste hilft bei der Einordnung.</p>

  <h2>1. Serverstandort und Stabilität</h2>
  <p>Ein IPTV Anbieter mit Servern, die auf europäische Verbindungen ausgelegt sind, liefert in der Regel weniger Pufferung als Anbieter mit Servern auf anderen Kontinenten – besonders bei Live-Sport, wenn viele Zuschauer gleichzeitig streamen.</p>

  <h2>2. Kanalanzahl vs. tatsächliche Qualität</h2>
  <p>Eine hohe Kanalanzahl ist wenig wert, wenn die Streams ständig einfrieren. Achten Sie auf Anbieter, die eine <a href="iptv-test.html">kostenlose Testmöglichkeit</a> anbieten, damit Sie die Qualität selbst prüfen können.</p>

  <h2>3. Deutschsprachiger Support</h2>
  <p>Bei technischen Problemen ist erreichbarer, deutschsprachiger Support entscheidend. Flimmerkanal bietet direkten Kontakt für Rückfragen zur Installation oder zu einzelnen Kanälen.</p>

  <h2>4. Transparente Preise ohne versteckte Kosten</h2>
  <p>Seriöse Anbieter zeigen ihre Preise pro Laufzeit und Geräteanzahl offen an. Unsere <a href="../index.html#preise">Preistabelle</a> zeigt alle Kombinationen von 1 bis 5 Geräten und 1 bis 12 Monaten Laufzeit ohne Zusatzkosten.</p>

  <h2>5. Kündbarkeit</h2>
  <p>Ein gutes IPTV Abo verlängert sich nicht automatisch zu unklaren Konditionen. Details dazu finden Sie in unseren <a href="../legal/agb.html">AGB</a>.</p>
  ''',
  "../"
)

build_page(
  "seo/iptv-test.html",
  "Kostenloser IPTV Test – Vor dem Kauf ausprobieren | Flimmerkanal",
  "IPTV kostenlos testen bei Flimmerkanal: Bildqualität, Kanalauswahl und Stabilität selbst prüfen, bevor Sie ein IPTV Abo abschließen.",
  BASE+"seo/iptv-test.html",
  "Kostenloser IPTV Test",
  '''
  <p>Ein <strong>IPTV Test</strong> nimmt Ihnen das Risiko, ein Abo zu kaufen, das nicht zu Ihrem Internetanschluss oder Gerät passt. Bei Flimmerkanal können Sie den Dienst vor dem Kauf ausprobieren.</p>

  <h2>Was Sie im Test prüfen können</h2>
  <ul>
    <li>Bildqualität in HD und 4K auf Ihrem eigenen Gerät</li>
    <li>Stabilität der Verbindung zu Stoßzeiten</li>
    <li>Bedienung der App bzw. des Players</li>
    <li>Verfügbarkeit der für Sie wichtigen Kanäle</li>
  </ul>

  <h2>So starten Sie den kostenlosen Test</h2>
  <p>Fordern Sie über unsere <a href="../kontakt.html">Kontaktseite</a> einen Testzugang an. Sie erhalten befristete Zugangsdaten sowie eine <a href="installationsanleitung.html">Installationsanleitung</a> für Ihr Gerät.</p>

  <h2>Und danach?</h2>
  <p>Überzeugt Sie der Test, wählen Sie einfach die passende Laufzeit und Geräteanzahl in unserer <a href="../index.html#preise">Preisübersicht</a> – vom 1-Geräte-Abo für 9 €/Monat bis zum 5-Geräte-Abo für die ganze Familie.</p>
  ''',
  "../"
)

build_page(
  "seo/iptv-abo.html",
  "IPTV Abo – Laufzeiten &amp; Geräteanzahl flexibel wählen | Flimmerkanal",
  "IPTV Abo bei Flimmerkanal: 1, 3, 6 oder 12 Monate Laufzeit, 1 bis 5 Geräte gleichzeitig. Transparente Preise, keine versteckten Kosten.",
  BASE+"seo/iptv-abo.html",
  "IPTV Abo: Laufzeit und Geräteanzahl flexibel kombinieren",
  '''
  <p>Ein <strong>IPTV Abo</strong> bei Flimmerkanal lässt sich genau auf Ihren Haushalt zuschneiden: Sie wählen die Laufzeit und die Anzahl der Geräte, die gleichzeitig streamen können.</p>

  <h2>Verfügbare Laufzeiten</h2>
  <ul>
    <li>1 Monat – zum Reinschnuppern</li>
    <li>3 Monate – für den mittelfristigen Gebrauch</li>
    <li>6 Monate – bester Kompromiss aus Preis und Flexibilität</li>
    <li>12 Monate – niedrigster Preis pro Monat</li>
  </ul>

  <h2>Geräteanzahl: 1 bis 5</h2>
  <p>Ob Sie allein streamen oder die ganze Familie gleichzeitig auf unterschiedlichen Geräten schauen möchte: Unsere Pakete reichen von 1 Gerät bis zu 5 gleichzeitigen Verbindungen.</p>

  <h2>Alle Preise im Überblick</h2>
  <p>Die vollständige, interaktive Preistabelle mit allen Kombinationen aus Laufzeit und Geräteanzahl finden Sie auf der <a href="../index.html#preise">Startseite im Bereich IPTV Abo</a>.</p>

  <h2>Nicht sicher, welches Paket passt?</h2>
  <p>Testen Sie zunächst kostenlos: <a href="iptv-test.html">Kostenlosen IPTV Test anfragen</a>.</p>
  ''',
  "../"
)

build_page(
  "seo/installationsanleitung.html",
  "IPTV Installationsanleitung – Smart-TV, Fire TV Stick, Android &amp; Handy | Flimmerkanal",
  "Schritt-für-Schritt IPTV Installationsanleitung für Smart-TV, Fire TV Stick, Android-Box, iOS und Windows.",
  BASE+"seo/installationsanleitung.html",
  "Installationsanleitung: IPTV in wenigen Minuten einrichten",
  '''
  <p>Nach dem Kauf Ihres <a href="../index.html#preise">IPTV Abos</a> richten Sie den Zugang in wenigen Minuten auf Ihrem Gerät ein. Wählen Sie unten Ihr Gerät.</p>

  <h2>Smart-TV (Samsung, LG &amp; Co.)</h2>
  <p>Laden Sie eine kompatible IPTV-App aus dem App-Store Ihres Fernsehers herunter, öffnen Sie die App und geben Sie die per E-Mail zugesendeten Zugangsdaten oder die M3U-Playlist-URL ein.</p>

  <h2>Fire TV Stick</h2>
  <p>Installieren Sie eine IPTV-Player-App über den Amazon App Store oder per Downloader-App, starten Sie die App und melden Sie sich mit Ihren Zugangsdaten an.</p>

  <h2>Android-Box &amp; Android-Handy</h2>
  <p>Laden Sie die empfohlene Player-App aus dem Play Store, fügen Sie Ihre Playlist über die Zugangsdaten hinzu und starten Sie das Streaming.</p>

  <h2>iOS (iPhone/iPad) &amp; Windows/Mac</h2>
  <p>Auf iOS und Desktop-Geräten nutzen Sie eine kompatible Player-App aus dem jeweiligen App Store. Die Anmeldedaten sind identisch mit denen für Ihre anderen Geräte.</p>

  <h2>Probleme bei der Installation?</h2>
  <p>Unser Support hilft bei Fragen zur Einrichtung. Schreiben Sie uns über die <a href="../kontakt.html">Kontaktseite</a>.</p>
  ''',
  "../"
)

build_page(
  "seo/kanaele.html",
  "IPTV Kanäle &amp; Sender – Deutsch, International &amp; Sport | Flimmerkanal",
  "Über 20.000 IPTV Kanäle: deutsche Sender, internationale Programme, Sport und Filme in HD und 4K bei Flimmerkanal.",
  BASE+"seo/kanaele.html",
  "Alle Sender im Überblick",
  '''
  <p>Flimmerkanal liefert Zugriff auf mehr als 20.000 Kanäle und Video-on-Demand-Inhalte in HD und 4K – gebündelt in einem einzigen <a href="iptv-abo.html">IPTV Abo</a>.</p>

  <h2>Deutschsprachige Sender</h2>
  <p>Öffentlich-rechtliche und private deutsche Sender sowie regionale Programme sind vollständig in der Playlist enthalten.</p>

  <h2>Sport-Kanäle</h2>
  <p>Fußball, Tennis, Motorsport und weitere Sportarten laufen über dedizierte Sportkanäle, ausgelegt auf stabile Streams auch bei hoher gleichzeitiger Auslastung.</p>

  <h2>Filme &amp; Serien (VOD)</h2>
  <p>Zusätzlich zu den Live-Kanälen steht eine laufend aktualisierte VOD-Bibliothek mit Filmen und Serien zur Verfügung.</p>

  <h2>Internationale Programme</h2>
  <p>Kanäle aus Europa, dem Nahen Osten und weiteren Regionen ergänzen das Angebot für mehrsprachige Haushalte.</p>

  <h2>Jetzt Kanäle selbst prüfen</h2>
  <p>Mit dem <a href="iptv-test.html">kostenlosen IPTV Test</a> sehen Sie die tatsächliche Kanalauswahl und Bildqualität, bevor Sie sich für ein Abo entscheiden.</p>
  ''',
  "../"
)

print("all legal + SEO pages generated")
