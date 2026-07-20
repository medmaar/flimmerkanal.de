/* FlimmerKanal — Shared JS */
(function(){

  /* ── Mobile nav ── */
  var burger = document.getElementById('fkBurger');
  var menu   = document.getElementById('fkMobileMenu');
  if(burger && menu){
    burger.addEventListener('click', function(){
      menu.classList.toggle('open');
      var spans = burger.querySelectorAll('span');
      if(menu.classList.contains('open')){
        spans[0].style.transform='rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity='0';
        spans[2].style.transform='rotate(-45deg) translate(5px,-5px)';
      } else {
        spans[0].style.transform='';
        spans[1].style.opacity='';
        spans[2].style.transform='';
      }
    });
  }

  /* ── FAQ accordion ── */
  document.querySelectorAll('.fk-faq-q').forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = this.closest('.fk-faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.fk-faq-item').forEach(function(i){ i.classList.remove('open'); });
      if(!wasOpen) item.classList.add('open');
    });
  });

  /* ── Review carousels ── */
  function makeCarousel(trackId, dotsId, count, autoMs){
    var track = document.getElementById(trackId);
    var dotsEl = document.getElementById(dotsId);
    if(!track || !dotsEl) return;
    var cur = 0;
    for(var i=0;i<count;i++){
      var d = document.createElement('button');
      d.className = 'rv-dot' + (i===0?' active':'');
      d.setAttribute('aria-label','Folie '+(i+1));
      (function(idx){ d.addEventListener('click', function(){ go(idx); }); })(i);
      dotsEl.appendChild(d);
    }
    function go(n){
      cur = n;
      track.style.transform = 'translateX(-'+(n*100)+'%)';
      dotsEl.querySelectorAll('.rv-dot').forEach(function(d,i){ d.classList.toggle('active', i===n); });
    }
    if(autoMs){ setInterval(function(){ go((cur+1)%count); }, autoMs); }
  }
  makeCarousel('tp-track','tp-dots',10,6000);
  makeCarousel('wa-track','wa-dots', 6,7000);
  makeCarousel('gg-track','gg-dots', 5,8000);

  /* ── Pricing device selector ── */
  var PRICES = {
    1: [9,25,35,45],
    2: [16,45,65,80],
    3: [22,65,95,115],
    4: [28,80,120,150],
    5: [34,95,145,185],
    6: [40,112,170,220],
    7: [46,130,195,250],
    8: [52,148,220,285],
    9: [58,165,245,315],
    10:[64,182,270,350]
  };
  var DUR_KEYS  = ['1monat','3monate','6monate','1jahr'];
  var DUR_SLUGS = ['1-monat','3-monate','6-monate','12-monate'];

  window.selectDev = function(n){
    document.querySelectorAll('.fk-dev-btn').forEach(function(b){ b.classList.remove('active'); });
    var active = document.querySelector('.fk-dev-btn[data-dev="'+n+'"]');
    if(active) active.classList.add('active');
    var p = PRICES[n] || PRICES[1];
    var cs = n===1 ? '-verbindung' : '-verbindungen';
    DUR_KEYS.forEach(function(k,i){
      var pe = document.getElementById('price-'+k);
      var pp = document.getElementById('per-'+k);
      var be = document.getElementById('btn-'+k);
      if(pe) pe.textContent = p[i]+'€';
      if(pp) pp.textContent = 'für '+ n + (n===1?' Gerät':' Geräte');
      if(be) be.href = 'iptv-'+DUR_SLUGS[i]+'-'+n+cs+'.html';
    });
  };

  /* attach dev buttons */
  document.querySelectorAll('.fk-dev-btn').forEach(function(btn){
    btn.addEventListener('click', function(){ selectDev(parseInt(this.getAttribute('data-dev'),10)); });
  });

  /* ── Drag-to-scroll for device row ── */
  var devScroll = document.querySelector('.fk-dev-scroll');
  if(devScroll){
    var dragging=false, startX=0, scrollLeft=0;
    devScroll.addEventListener('mousedown', function(e){ dragging=true; startX=e.pageX-devScroll.offsetLeft; scrollLeft=devScroll.scrollLeft; devScroll.style.cursor='grabbing'; e.preventDefault(); });
    devScroll.addEventListener('mouseleave', function(){ dragging=false; devScroll.style.cursor='grab'; });
    devScroll.addEventListener('mouseup',    function(){ dragging=false; devScroll.style.cursor='grab'; });
    devScroll.addEventListener('mousemove',  function(e){ if(!dragging) return; devScroll.scrollLeft = scrollLeft-(e.pageX-devScroll.offsetLeft-startX)*1.2; });
    devScroll.style.cursor='grab';
  }

  /* ── Sales banner ── */
  var banner    = document.getElementById('fkSalesBanner');
  var closeBtn  = document.getElementById('fkSalesBannerClose');
  var titleEl   = document.getElementById('fkSalesBannerTitle');
  var textEl    = document.getElementById('fkSalesBannerText');
  if(banner && titleEl && textEl){
    if(sessionStorage.getItem('fk_banner_dismissed')==='1'){ /* skip */ } else {
      var names = ['Michael','Thomas','Andreas','Stefan','Markus','Christian','Klaus','Wolfgang','Sebastian','Felix','Laura','Sarah','Anna','Julia','Lisa','Maria','Nicole','Sandra','Petra','Katrin'];
      var cities = ['Berlin','München','Hamburg','Köln','Frankfurt','Stuttgart','Düsseldorf','Dortmund','Essen','Leipzig','Bremen','Dresden','Hannover','Nürnberg','Duisburg','Bochum','Wuppertal','Bielefeld','Bonn','Mannheim'];
      var plans  = ['1-Monats-Abo','3-Monats-Abo','3-Monats-Abo','6-Monats-Abo','6-Monats-Abo','Jahres-Abo','Jahres-Abo','Jahres-Abo'];
      var ago    = ['gerade eben','vor 2 Minuten','vor 5 Minuten','vor 9 Minuten'];
      function pick(a){ return a[Math.floor(Math.random()*a.length)]; }
      var dismissed=false, lastName=null, timers=[];
      function setT(fn,ms){ var id=setTimeout(fn,ms); timers.push(id); return id; }
      function next(){
        var name=pick(names); while(name===lastName){ name=pick(names); } lastName=name;
        titleEl.innerHTML='<b>'+name+'</b> aus '+pick(cities)+' hat gerade das '+pick(plans)+' bestellt';
        textEl.textContent=pick(ago);
      }
      function cycle(){
        if(dismissed) return;
        next(); banner.classList.add('show');
        setT(function(){ if(dismissed) return; banner.classList.remove('show'); setT(cycle,3500); }, 5000);
      }
      setT(cycle, 2500+Math.floor(Math.random()*2000));
      if(closeBtn){
        closeBtn.addEventListener('click',function(){
          dismissed=true; banner.classList.remove('show');
          sessionStorage.setItem('fk_banner_dismissed','1');
          timers.forEach(clearTimeout);
        });
      }
    }
  }

})();
