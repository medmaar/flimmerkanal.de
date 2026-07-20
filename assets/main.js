/* FlimmerKanal — main.js
   Fixes: correct prices, working device switcher, FAQ accordion, carousels
   layout.js handles: nav injection, footer injection, WA float, sales banner
*/
(function () {
  'use strict';

  /* ══════════════════════════════════════════
     PRICING TABLE  (correct prices per spec)
     PRICES[connections][durIndex]
     durIndex: 0=1Monat  1=3Monate  2=6Monate  3=1Jahr
     ══════════════════════════════════════════ */
  var PRICES = {
    1:  [9,   29,  39,  49],
    2:  [18,  50,  69,  89],
    3:  [27,  75, 105, 135],
    4:  [36,  99, 140, 180],
    5:  [45, 120, 175, 225],
    6:  [54, 144, 210, 270],
    7:  [63, 168, 245, 315],
    8:  [72, 192, 280, 360],
    9:  [81, 216, 315, 405],
    10: [90, 240, 350, 450]
  };

  var DUR_KEYS  = ['1monat', '3monate', '6monate', '1jahr'];
  var DUR_SLUGS = ['1-monat', '3-monate', '6-monate', '12-monate'];

  /* ── Device selector ── */
  function selectDev(n) {
    // Active button styling
    document.querySelectorAll('.fk-dev-btn').forEach(function (b) {
      b.classList.remove('active');
    });
    var activeBtn = document.querySelector('.fk-dev-btn[data-dev="' + n + '"]');
    if (activeBtn) activeBtn.classList.add('active');

    var p  = PRICES[n] || PRICES[1];
    var cs = n === 1 ? '-verbindung' : '-verbindungen';

    DUR_KEYS.forEach(function (k, i) {
      var priceEl = document.getElementById('price-' + k);
      var perEl   = document.getElementById('per-'   + k);
      var btnEl   = document.getElementById('btn-'   + k);
      if (priceEl) priceEl.textContent = p[i] + '€';
      if (perEl)   perEl.textContent   = 'für ' + n + (n === 1 ? ' Gerät' : ' Geräte');
      if (btnEl)   btnEl.href = '/plan/iptv-' + DUR_SLUGS[i] + '-' + n + cs + '.html';
    });
  }

  /* Expose globally so onclick= attrs in HTML also work */
  window.selectDev = selectDev;

  function bindDevButtons() {
    document.querySelectorAll('.fk-dev-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectDev(parseInt(this.getAttribute('data-dev'), 10));
      });
    });
    /* Run once on load to set correct initial state for device=1 */
    selectDev(1);
  }

  /* ── FAQ accordion ── */
  function bindFAQ() {
    document.querySelectorAll('.fk-faq-q').forEach(function (btn) {
      /* Remove any stale listeners by cloning */
      var fresh = btn.cloneNode(true);
      btn.parentNode.replaceChild(fresh, btn);
      fresh.addEventListener('click', function () {
        var item    = this.closest('.fk-faq-item');
        var wasOpen = item.classList.contains('open');
        document.querySelectorAll('.fk-faq-item').forEach(function (i) {
          i.classList.remove('open');
        });
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  /* ── Review carousels ── */
  function makeCarousel(trackId, dotsId, count, autoMs) {
    var track  = document.getElementById(trackId);
    var dotsEl = document.getElementById(dotsId);
    if (!track || !dotsEl) return;
    var cur = 0;

    for (var i = 0; i < count; i++) {
      var d = document.createElement('button');
      d.className = 'rv-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Folie ' + (i + 1));
      (function (idx) {
        d.addEventListener('click', function () { go(idx); });
      }(i));
      dotsEl.appendChild(d);
    }

    function go(n) {
      cur = n;
      track.style.transform = 'translateX(-' + (n * 100) + '%)';
      dotsEl.querySelectorAll('.rv-dot').forEach(function (dot, j) {
        dot.classList.toggle('active', j === n);
      });
    }

    if (autoMs) {
      setInterval(function () { go((cur + 1) % count); }, autoMs);
    }
  }

  /* ── Drag-to-scroll device row ── */
  function bindDragScroll() {
    var el = document.querySelector('.fk-dev-scroll');
    if (!el) return;
    var dragging = false, startX = 0, scrollLeft = 0;
    el.addEventListener('mousedown', function (e) {
      dragging    = true;
      startX      = e.pageX - el.offsetLeft;
      scrollLeft  = el.scrollLeft;
      el.style.cursor = 'grabbing';
      e.preventDefault();
    });
    el.addEventListener('mouseleave', function () { dragging = false; el.style.cursor = 'grab'; });
    el.addEventListener('mouseup',    function () { dragging = false; el.style.cursor = 'grab'; });
    el.addEventListener('mousemove',  function (e) {
      if (!dragging) return;
      el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 1.2;
    });
    el.style.cursor = 'grab';
  }

  /* ── Init ── */
  function init() {
    bindDevButtons();
    bindFAQ();
    bindDragScroll();
    makeCarousel('tp-track', 'tp-dots', 10, 6000);
    makeCarousel('wa-track', 'wa-dots',  6, 7000);
    makeCarousel('gg-track', 'gg-dots',  5, 8000);
  }

  /* layout.js injects nav/footer asynchronously, so FAQ elements may
     not be in DOM yet when main.js runs. Re-bind after a short tick. */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      init();
      setTimeout(bindFAQ, 200); /* catch any late-injected FAQ items */
    });
  } else {
    init();
    setTimeout(bindFAQ, 200);
  }

}());
