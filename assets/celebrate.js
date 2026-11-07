/* FlimmerKanal: full-screen celebration after a free-trial request or a plan order.
   The existing forms are untouched: this script watches their success panels
   (#tf-success on /kostenloser-test, #fk-suc on /plan/*) and shows the overlay the
   moment one becomes visible, with the email the client typed.
   Preview without submitting: add ?celebrate=trial or ?celebrate=order to the page URL. */
(function () {
  "use strict";

  var TEXT = {
    trial: {
      title: "Ihr Gratis-Test ist unterwegs!",
      lines: [
        "Unsere Technik-Wichtel schicken Ihre Zugangsdaten gerade im ICE-Tempo an <b data-c-email></b>. Keine Sorge: diesmal ganz ohne Verspätung. 🚄",
        "Meist ist die Mail in unter 2 Minuten da. Bitte prüfen Sie Ihren <b>Posteingang</b> UND Ihren <b>Spam-Ordner</b>, denn manchmal versteckt sich unsere Mail dort wie die Fernbedienung in der Sofaritze.",
        "Ihre einzige Aufgabe für die nächsten 24 Stunden: Chips holen und Füße hoch. 🍿"
      ],
      btn: "Alles klar, ich hol die Chips"
    },
    order: {
      title: "Geschafft! Bestellung ist raus.",
      lines: [
        "Starke Entscheidung. Ihr Sofa wurde bereits informiert und ist mächtig stolz auf Sie. 🛋️",
        "Ihre Rechnung fliegt gerade an <b data-c-email></b>. Bitte prüfen Sie Ihren <b>Posteingang</b> UND Ihren <b>Spam-Ordner</b> (E-Mails spielen leider gern Verstecken).",
        "Rechnung bezahlen, und schon flimmert es bei Ihnen schneller, als Lola rennt. 📺"
      ],
      btn: "Super, los geht’s!"
    }
  };

  var CSS =
    ".fk-celebrating,.fk-celebrating body{overflow:hidden}" +
    ".fk-cel-hide{display:none!important}" +
    ".fk-cel{position:fixed;inset:0;z-index:100000;display:flex;flex-direction:column;align-items:center;box-sizing:border-box;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;" +
    "padding:max(16px,env(safe-area-inset-top)) max(16px,env(safe-area-inset-right)) max(16px,env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left));font-family:var(--font,'Plus Jakarta Sans',sans-serif);" +
    "background:radial-gradient(circle at 50% 35%,rgba(34,197,94,.22),transparent 60%),rgba(10,4,20,.92);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);animation:fkc-in .3s ease both}" +
    ".fk-cel.is-out{animation:fkc-out .25s ease forwards}" +
    ".fk-cel-box{position:relative;box-sizing:border-box;width:100%;max-width:560px;margin:auto;flex-shrink:0;text-align:center;padding:clamp(28px,6vw,48px) clamp(18px,5vw,40px);background:#140c20;" +
    "border:1px solid rgba(34,197,94,.45);border-radius:20px;box-shadow:0 0 0 1px rgba(34,197,94,.2),0 40px 120px -30px rgba(34,197,94,.45);animation:fkc-pop .55s .05s cubic-bezier(.2,.9,.3,1.3) both}" +
    ".fk-cel-mark{display:block;width:clamp(130px,38vw,180px);height:auto;margin:0 auto 22px;fill:none;stroke:#4ade80;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 24px rgba(74,222,128,.5))}" +
    ".fk-cel-mark circle{stroke-width:6;stroke-dasharray:340;stroke-dashoffset:340;fill:rgba(34,197,94,.1);animation:fkc-draw .7s .2s ease forwards}" +
    ".fk-cel-mark path{stroke-width:9;stroke-dasharray:80;stroke-dashoffset:80;transform-origin:center;animation:fkc-draw .45s .8s ease forwards,fkc-bounce .5s 1.2s ease}" +
    ".fk-cel h2{font-size:clamp(28px,6vw,40px);line-height:1.15;margin:0 0 16px;color:#4ade80;font-weight:900}" +
    ".fk-cel p{color:rgba(232,224,255,.82);font-size:clamp(16px,2.2vw,18px);line-height:1.55;margin:0 auto 12px;max-width:460px}" +
    ".fk-cel p b{color:#fff;word-break:break-word}" +
    ".fk-cel-go{display:block;width:100%;max-width:360px;margin:18px auto 0;padding:16px;background:var(--red,#fd0322);border:0;border-radius:12px;color:#fff;font:inherit;font-size:1rem;font-weight:900;cursor:pointer;transition:all .2s}" +
    ".fk-cel-go:hover,.fk-cel-go:focus-visible{background:var(--red-dark,#c50018);box-shadow:0 8px 28px rgba(253,3,34,.4)}" +
    ".fk-cel-bits{position:fixed;inset:0;pointer-events:none;overflow:hidden}" +
    ".fk-cel-bits i{position:absolute;top:-40px;left:var(--x);width:10px;height:16px;border-radius:3px;font-style:normal;font-size:22px;line-height:1;background:var(--red,#fd0322);animation:fkc-fall var(--t) var(--d) linear infinite}" +
    ".fk-cel-bits i:nth-child(4n+1){background:#4ade80}" +
    ".fk-cel-bits i:nth-child(4n+2){background:#a78bfa}" +
    ".fk-cel-bits i:nth-child(5n+3){background:#fff}" +
    ".fk-cel-bits i:nth-child(3n+1){width:auto;height:auto;background:none}" +
    "@keyframes fkc-in{from{opacity:0}}@keyframes fkc-out{to{opacity:0}}" +
    "@keyframes fkc-pop{from{opacity:0;transform:scale(.85) translateY(20px)}}" +
    "@keyframes fkc-draw{to{stroke-dashoffset:0}}" +
    "@keyframes fkc-bounce{50%{transform:scale(1.15)}}" +
    "@keyframes fkc-fall{from{transform:translateY(0) rotate(var(--r))}to{transform:translateY(110vh) rotate(calc(var(--r) + 540deg))}}" +
    "@media (max-height:700px){.fk-cel-mark{width:100px;margin-bottom:14px}.fk-cel h2{margin-bottom:12px}}" +
    "@media (max-width:360px){.fk-cel-box{padding:24px 14px}.fk-cel h2{font-size:24px}.fk-cel p{font-size:15px}}" +
    "@media (max-height:560px){.fk-cel-mark{width:84px;margin-bottom:12px}.fk-cel h2{font-size:24px;margin-bottom:10px}.fk-cel p{font-size:15px;margin-bottom:8px}.fk-cel-go{margin-top:10px;padding:13px}.fk-cel-box{padding:22px 20px}}" +
    "@media (prefers-reduced-motion:reduce){.fk-cel,.fk-cel-box{animation:none}.fk-cel-bits{display:none}.fk-cel-mark circle,.fk-cel-mark path{animation:none;stroke-dashoffset:0}}";

  function injectCss() {
    if (document.getElementById("fk-cel-css")) return;
    var st = document.createElement("style");
    st.id = "fk-cel-css";
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  var EMOJI = ["📺", "🍿", "⚽", "🎬"];

  function celebrate(kind, email) {
    var c = TEXT[kind];
    if (!c) return;
    injectCss();
    var old = document.querySelector(".fk-cel");
    if (old) old.remove();
    var el = document.createElement("div");
    el.className = "fk-cel";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-labelledby", "fk-cel-title");
    var bits = "";
    for (var i = 0; i < 28; i++) {
      bits += '<i style="--x:' + ((i * 37) % 100) + "%;--d:" + ((i % 7) * 0.35) + "s;--t:" + (3.2 + (i % 5) * 0.5) + "s;--r:" + ((i * 53) % 360) + 'deg">' +
        (i % 3 ? "" : EMOJI[(i / 3) % EMOJI.length]) + "</i>";
    }
    el.innerHTML = '<div class="fk-cel-bits" aria-hidden="true">' + bits + "</div>" +
      '<div class="fk-cel-box">' +
      '<svg class="fk-cel-mark" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="54"/><path d="M36 62 53 79 86 44"/></svg>' +
      '<h2 id="fk-cel-title">' + c.title + "</h2>" +
      c.lines.map(function (l) { return "<p>" + l + "</p>"; }).join("") +
      '<button class="fk-cel-go" type="button">' + c.btn + "</button></div>";
    var slots = el.querySelectorAll("[data-c-email]");
    for (var j = 0; j < slots.length; j++) slots[j].textContent = email || "Ihre E-Mail-Adresse";
    // No way to dismiss back to the page: the only button takes the client to the homepage.
    var go = el.querySelector(".fk-cel-go");
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab") { e.preventDefault(); go.focus(); }
      if (e.key === "Escape") e.preventDefault();
    });
    go.addEventListener("click", function () { location.href = "/"; });
    document.body.appendChild(el);
    document.documentElement.classList.add("fk-celebrating");
    try { go.focus({ preventScroll: true }); } catch (e) {}
  }

  // Fire once when a form's success panel becomes visible.
  function watch(panelId, emailId, kind) {
    var panel = document.getElementById(panelId);
    if (!panel || !window.MutationObserver) return;
    var shown = false;
    new MutationObserver(function () {
      var visible = panel.style.display && panel.style.display !== "none";
      if (visible && !shown) {
        shown = true;
        injectCss();
        panel.classList.add("fk-cel-hide"); // never show the old plain confirmation underneath
        var input = document.getElementById(emailId);
        celebrate(kind, input ? input.value.trim() : "");
      } else if (!visible) {
        shown = false;
      }
    }).observe(panel, { attributes: true, attributeFilter: ["style"] });
  }

  function init() {
    watch("tf-success", "tf-email", "trial");
    watch("fk-suc", "f-email", "order");
    var q = new URLSearchParams(location.search).get("celebrate");
    if (q) celebrate(q === "order" ? "order" : "trial", "sie@beispiel.de");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  window.fkCelebrate = celebrate;
})();
