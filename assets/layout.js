/* ═══════════════════════════════════════════════════
   FlimmerKanal — Shared Layout (nav + footer)
   Single source of truth injected on every page.
   ═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Active page detection ── */
  var path = window.location.pathname.replace(/\/$/, '') || '/index.html';
  function isActive(href) {
    var h = href.replace(/^\//, '');
    var p = path.replace(/^\//, '');
    if (h === 'index.html' || h === '') return p === '' || p === 'index.html';
    return p === h || p.startsWith(h.replace(/\.html$/, ''));
  }

  /* ── WA path helper ── */
  var WA_BASE = '/go/wa?msg=';

  /* ══════════════════════════════════════════════
     NAV
     ══════════════════════════════════════════════ */
  var NAV_HTML = [
    '<nav class="fk-nav" id="fkNav">',
    '  <a href="/index.html" class="fk-nav-logo">',
    '    <img src="/assets/logo.svg" alt="FlimmerKanal" loading="lazy"',
    '         onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'">',
    '    <span style="display:none">FlimmerKanal</span>',
    '  </a>',
    '  <div class="fk-nav-links">',
    '    <a href="/index.html"'             + (isActive('/index.html')               ? ' class="active"' : '') + '>Startseite</a>',
    '    <a href="/preise.html"'            + (isActive('/preise.html')              ? ' class="active"' : '') + '>Preise</a>',
    '    <a href="/wie-es-funktioniert.html"' + (isActive('/wie-es-funktioniert.html') ? ' class="active"' : '') + '>So geht\'s</a>',
    '    <a href="/ueber-uns.html"'         + (isActive('/ueber-uns.html')           ? ' class="active"' : '') + '>Über uns</a>',
    '    <a href="/kostenloser-test.html" class="fk-nav-cta">Kostenlos testen</a>',
    '  </div>',
    '  <button class="fk-burger" id="fkBurger" aria-label="Menü" aria-expanded="false">',
    '    <span></span><span></span><span></span>',
    '  </button>',
    '</nav>',
    '<div class="fk-mobile-menu" id="fkMobileMenu" aria-hidden="true">',
    '  <a href="/index.html">Startseite</a>',
    '  <a href="/preise.html">Preise</a>',
    '  <a href="/wie-es-funktioniert.html">So geht\'s</a>',
    '  <a href="/ueber-uns.html">Über uns</a>',
    '  <a href="/kontakt.html">Kontakt</a>',
    '  <a href="/kostenloser-test.html" class="fk-nav-cta">Kostenlos testen</a>',
    '</div>'
  ].join('\n');

  /* ══════════════════════════════════════════════
     FOOTER  (logo is now a clickable link)
     ══════════════════════════════════════════════ */
  var FOOTER_HTML = [
    '<footer class="fk-footer">',
    '  <div class="fk-footer-inner">',
    '    <div class="fk-footer-top">',

    /* Brand / logo — wrapped in <a> so it's clickable */
    '      <div class="fk-footer-brand">',
    '        <a href="/index.html" aria-label="FlimmerKanal Startseite">',
    '          <img src="/assets/logo.svg" alt="FlimmerKanal" loading="lazy"',
    '               onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'">',
    '          <span style="display:none">FlimmerKanal</span>',
    '        </a>',
    '        <div class="fk-footer-brand-text">',
    '          Premium IPTV Deutschland<br>',
    '          <a href="mailto:kontakt@flimmerkanal.de">kontakt@flimmerkanal.de</a>',
    '        </div>',
    '      </div>',

    /* Nav columns */
    '      <div class="fk-footer-cols">',
    '        <div class="fk-footer-col">',
    '          <h5>Service</h5>',
    '          <a href="/index.html">Startseite</a>',
    '          <a href="/preise.html">Preise</a>',
    '          <a href="/kostenloser-test.html">Kostenlos testen</a>',
    '          <a href="/wie-es-funktioniert.html">So geht\'s</a>',
    '        </div>',
    '        <div class="fk-footer-col">',
    '          <h5>Unternehmen</h5>',
    '          <a href="/ueber-uns.html">Über uns</a>',
    '          <a href="/kontakt.html">Kontakt</a>',
    '          <a href="' + WA_BASE + 'Hallo%2C+ich+interessiere+mich+f%C3%BCr+FlimmerKanal" target="_blank" rel="noopener">WhatsApp Support</a>',
    '        </div>',
    '        <div class="fk-footer-col">',
    '          <h5>Rechtliches</h5>',
    '          <a href="/legal/datenschutz.html">Datenschutz</a>',
    '          <a href="/legal/agb.html">AGB</a>',
    '          <a href="/legal/widerruf.html">Widerrufsrecht</a>',
    '          <a href="/legal/impressum.html">Impressum</a>',
    '        </div>',
    '      </div>',
    '    </div>',

    /* Payment methods */
    '    <div class="fk-footer-payments">',
    '      <p>Akzeptierte Zahlungsmethoden</p>',
    '      <img src="/assets/payment-methods.jpg" alt="Visa, Mastercard, PayPal, Apple Pay, Google Pay, Bitcoin, USDT" loading="lazy" class="fk-payment-img" style="filter:brightness(0) invert(1);opacity:.75;">',
    '    </div>',

    /* Copyright */
    '    <div class="fk-footer-copy">',
    '      © 2025 FlimmerKanal. Alle Rechte vorbehalten. FlimmerKanal ist ein unabhängiger IPTV-Service-Anbieter.',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  /* ── WhatsApp float ── */
  var WA_FLOAT = '<a href="' + WA_BASE + 'Hallo%2C+ich+interessiere+mich+f%C3%BCr+FlimmerKanal" class="fk-wa-float" target="_blank" rel="noopener" aria-label="WhatsApp Kontakt"><svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true"><path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.36.66 4.57 1.8 6.46L4 29l7.7-1.75a11.98 11.98 0 0 0 4.32.8h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-4.57 1.04 1.06-4.45-.24-.38a9.86 9.86 0 0 1-1.5-5.5c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.87-9.87 9.87zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/></svg></a>';

  /* ══════════════════════════════════════════════
     INJECT
     ══════════════════════════════════════════════ */
  function inject() {
    var body = document.body;
    if (!body) return;

    var navHolder    = document.getElementById('fk-nav-placeholder');
    var footerHolder = document.getElementById('fk-footer-placeholder');

    if (navHolder) {
      navHolder.outerHTML = NAV_HTML;
    } else if (!document.getElementById('fkNav')) {
      body.insertAdjacentHTML('afterbegin', NAV_HTML);
    }

    if (footerHolder) {
      footerHolder.outerHTML = FOOTER_HTML + WA_FLOAT;
    } else if (!document.querySelector('.fk-footer')) {
      body.insertAdjacentHTML('beforeend', FOOTER_HTML + WA_FLOAT);
    }

    bindNav();
    injectSalesBanner();
  }

  /* ── Mobile nav ── */
  function bindNav() {
    var burger = document.getElementById('fkBurger');
    var menu   = document.getElementById('fkMobileMenu');
    if (!burger || !menu) return;
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      menu.setAttribute('aria-hidden', !open);
      var spans = burger.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });
  }

  /* ── Sales banner ── */
  function injectSalesBanner() {
    if (document.getElementById('fkSalesBanner')) return;
    document.body.insertAdjacentHTML('beforeend',
      '<div class="fk-sales-banner" id="fkSalesBanner">' +
        '<button class="fk-sales-banner-close" id="fkSalesBannerClose" aria-label="Schließen">&times;</button>' +
        '<div class="fk-sales-banner-icon">🛒</div>' +
        '<div><div class="fk-sales-banner-title" id="fkSalesBannerTitle"></div>' +
        '<div class="fk-sales-banner-text" id="fkSalesBannerText"></div></div>' +
      '</div>'
    );
    var banner   = document.getElementById('fkSalesBanner');
    var closeBtn = document.getElementById('fkSalesBannerClose');
    var titleEl  = document.getElementById('fkSalesBannerTitle');
    var textEl   = document.getElementById('fkSalesBannerText');
    if (!banner || !titleEl || !textEl) return;
    if (sessionStorage.getItem('fk_banner_dismissed') === '1') return;

    var names  = ['Michael','Thomas','Andreas','Stefan','Markus','Christian','Klaus','Wolfgang','Sebastian','Felix','Laura','Sarah','Anna','Julia','Lisa','Maria','Nicole','Sandra','Petra','Katrin'];
    var cities = ['Berlin','München','Hamburg','Köln','Frankfurt','Stuttgart','Düsseldorf','Dortmund','Essen','Leipzig','Bremen','Dresden','Hannover','Nürnberg','Duisburg','Bochum','Bielefeld','Bonn','Mannheim','Wuppertal'];
    var plans  = ['1-Monats-Abo','3-Monats-Abo','3-Monats-Abo','6-Monats-Abo','Jahres-Abo','Jahres-Abo','Jahres-Abo'];
    var ago    = ['gerade eben','vor 2 Minuten','vor 5 Minuten','vor 9 Minuten'];
    function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

    var dismissed = false, lastName = null, timers = [];
    function setT(fn, ms) { var id = setTimeout(fn, ms); timers.push(id); }

    function cycle() {
      if (dismissed) return;
      var name = pick(names);
      while (name === lastName) name = pick(names);
      lastName = name;
      titleEl.innerHTML = '<b>' + name + '</b> aus ' + pick(cities) + ' hat gerade das ' + pick(plans) + ' bestellt';
      textEl.textContent = pick(ago);
      banner.classList.add('show');
      setT(function () {
        if (dismissed) return;
        banner.classList.remove('show');
        setT(cycle, 3500);
      }, 5000);
    }
    setT(cycle, 2500 + Math.floor(Math.random() * 2000));

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        dismissed = true;
        banner.classList.remove('show');
        sessionStorage.setItem('fk_banner_dismissed', '1');
        timers.forEach(clearTimeout);
      });
    }
  }

  /* ── Boot ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

}());
