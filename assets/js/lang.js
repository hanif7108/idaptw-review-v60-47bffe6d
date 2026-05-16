// Language toggle for bilingual review portal
(function() {
  const STORAGE_KEY = 'idaptw_lang';

  function setLang(lang) {
    document.body.className = 'lang-' + lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-toggle') === lang);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}
  }

  // Bind toggle buttons
  document.querySelectorAll('.lang-toggle button[data-toggle]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      setLang(btn.getAttribute('data-toggle'));
    });
  });

  // Restore preferred lang
  let lang = 'id';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'id') lang = saved;
  } catch(e) {}
  setLang(lang);
})();
