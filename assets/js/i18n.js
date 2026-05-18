// IDA-PTW v60 — Bilingual toggle (URL-shareable via ?lang=)
(function(){
  function getParam(k){
    return new URLSearchParams(window.location.search).get(k);
  }
  function setLang(lang){
    if(lang !== 'en' && lang !== 'id') lang = 'id';
    document.body.classList.remove('lang-en','lang-id');
    document.body.classList.add('lang-'+lang);
    try{
      const u = new URL(window.location.href);
      u.searchParams.set('lang', lang);
      window.history.replaceState({}, '', u.toString());
      localStorage.setItem('idaptw_lang', lang);
    }catch(e){}
    document.querySelectorAll('.lang-toggle button').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-lang')===lang);
    });
    // also rewrite nav links so language persists across pages
    document.querySelectorAll('a[data-keep-lang]').forEach(function(a){
      try{
        const url = new URL(a.getAttribute('href'), window.location.href);
        url.searchParams.set('lang', lang);
        a.setAttribute('href', url.pathname.split('/').pop() + url.search);
      }catch(e){}
    });
    document.documentElement.lang = lang;
  }
  function init(){
    let lang = getParam('lang');
    if(!lang){
      try{ lang = localStorage.getItem('idaptw_lang'); }catch(e){}
    }
    if(!lang){
      lang = (navigator.language && navigator.language.toLowerCase().startsWith('en')) ? 'en' : 'id';
    }
    document.querySelectorAll('.lang-toggle button').forEach(function(b){
      b.addEventListener('click', function(){ setLang(b.getAttribute('data-lang')); });
    });
    setLang(lang);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.__setLang = setLang;
})();
