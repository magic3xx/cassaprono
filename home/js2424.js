const translations = {
  'fr': {
    'pageTitle': "DARK&MAGIC",
    'brandName': "DARK&MAGIC",
    'sidebarTitle': 'Menu',
    'modeDark': "Mode Sombre",
    'modeLight': "Mode Clair",
    'gamesTitle': "Nos Jeux",
    'loadingText': "Chargement de votre jeu...",
    'noLangError': "Veuillez configurer la langue dans le bot avant de continuer",
    'category1win': "1win bet",
    'categoryOther': "Autres Bets"
  },
  'en': {
    'pageTitle': "DARK&MAGIC",
    'brandName': "DARK&MAGIC",
    'sidebarTitle': "Menu",
    'modeDark': "Dark Mode",
    'modeLight': "Light Mode",
    'gamesTitle': "Our Games",
    'loadingText': "Loading your game...",
    'noLangError': "Please configure the language in the bot before continuing",
    'category1win': "1win bet",
    'categoryOther': "Other Bets"
  },
  'ru': {
    'pageTitle': "DARK&MAGIC",
    'brandName': 'DARK&MAGIC',
    'sidebarTitle': 'Меню',
    'modeDark': "Тёмный режим",
    'modeLight': "Светлый режим",
    'gamesTitle': "Наши игры",
    'loadingText': "Загрузка вашей игры...",
    'noLangError': "Пожалуйста, настройте язык в боте перед продолжением",
    'category1win': "1win ставка",
    'categoryOther': "Другие ставки"
  },
  'ar': {
    'pageTitle': "DARK&MAGIC",
    'brandName': "DARK&MAGIC",
    'sidebarTitle': "القائمة",
    'modeDark': "الوضع الداكن",
    'modeLight': "الوضع الفاتح",
    'gamesTitle': 'ألعابنا',
    'loadingText': "جارٍ تحميل لعبتك...",
    'noLangError': "يرجى تهيئة اللغة في البوت قبل المتابعة",
    'category1win': "رهان 1win",
    'categoryOther': "رهانات أخرى"
  }
};
const gamesData = [{
  'name': "Lucky Jet",
  'url': 'home/LuckyJet/game.html',
  'image': "home/LuckyJet/Imogos/LuckyBases.jpg",
  'category': "1win bet"
}, {
  'name': "Aviator",
  'url': "home/Aviator/gameAvia.html",
  'image': "home/Aviator/logo/aviator-game.webp",
  'category': "Autres Bets"
}, {
  'name': "Apple of Fortune",
  'url': 'home/apple/applegame.html',
  'image': "home/apple/stelo/logo .jpg",
  'category': "Autres Bets"
}, {
  'name': "Gems Mines",
  'url': "home/grile/mines.html",
  'image': "home/grile/vision/BaseMines.jpg",
  'category': "Autres Bets"
}, {
  'name': "Dragons",
  'url': "home/Dragons/dragonS/game.html",
  'image': "home/Dragons/dragonS/imag/baseDragons.jpg",
  'category': "Autres Bets"
}, {
  'name': "Thimbles",
  'url': "home/boll/thimble.html",
  'image': "home/boll/imog/BaseThimbles.jpg",
  'category': "Autres Bets"
}, {
  'name': 'Swimp',
  'url': 'home/crapaud/swimp.html',
  'image': "home/crapaud/imago/baseCrap.jpg",
  'category': "Autres Bets"
}, {
  'name': "Crash",
  'url': "crash/crash.html",
  'image': "crash/vision/logo.jpg",
  'category': "Autres Bets"
}, {
  'name': "Mundial",
  'url': "home/Mundial/game.html",
  'image': "home/Mundial/imogs/BaseMond.jpeg",
  'category': "Autres Bets"
}, {
  'name': "Wild Gost",
  'url': "home/WildG/wild.html",
  'image': "home/WildG/imog/west logo.jpg",
  'category': "Autres Bets"
}];
function sanitizeInput(_0x1f2699) {
  const _0x1c2e9e = document.createElement("div");
  _0x1c2e9e.textContent = _0x1f2699;
  return _0x1c2e9e.innerHTML;
}
function getParam(_0x11aeb6) {
  const _0x185922 = new URLSearchParams(window.location.search);
  return sanitizeInput(_0x185922.get(_0x11aeb6) || '');
}
function getGameUrlWithParams(_0x13fcec) {
  const _0x9e2e68 = getParam("lang");
  const _0x50ca17 = getParam('us');
  const _0x533efe = getParam('i');
  const _0x415c40 = getParam('lk');
  const _0x40ec55 = new URLSearchParams();
  if (_0x9e2e68) {
    _0x40ec55.append("lang", _0x9e2e68);
  }
  if (_0x50ca17) {
    _0x40ec55.append('us', _0x50ca17);
  }
  if (_0x533efe) {
    _0x40ec55.append('i', _0x533efe);
  }
  if (_0x415c40) {
    _0x40ec55.append('lk', _0x415c40);
  }
  return '' + _0x13fcec + (_0x40ec55.toString() ? '?' + _0x40ec55.toString() : '');
}
// ----- MODIFIED FUNCTION STARTS HERE -----
function parseProfileFromUrl() {
  const _0x19aa0f = getParam('us');
  const _0x5d4bc9 = getParam('i');
  const _0xac17ee = getParam('lk');
  const _0x238ff1 = document.getElementById("profileBtn");
  const _0x4b9ddc = document.getElementById("profileInfo");
  const _0x23a271 = document.getElementById('profileName');
  const _0x3b9d69 = document.getElementById("profileId");
  if (_0x5d4bc9 && _0x19aa0f && _0xac17ee) {
    const _0x4cb18d = "https://t.me/" + _0xac17ee;
    _0x238ff1.setAttribute("href", _0x4cb18d);
    _0x23a271.textContent = _0x19aa0f;
    _0x3b9d69.style.display = 'none'; // <-- THIS LINE IS CHANGED to hide the ID
    _0x4b9ddc.style.display = 'block';
  }
}
// ----- MODIFIED FUNCTION ENDS HERE -----
function applyTranslations(_0x7c5259) {
  const _0x38288c = translations[_0x7c5259] || translations.fr;
  document.getElementById("page-title").textContent = _0x38288c.pageTitle;
  document.getElementById("brand-name").textContent = _0x38288c.brandName;
  document.getElementById("sidebar-title").textContent = _0x38288c.sidebarTitle;
  document.getElementById('games-title').textContent = _0x38288c.gamesTitle;
  document.getElementById('loadingText').textContent = _0x38288c.loadingText;
  const _0x1b83c0 = document.getElementById("modeText");
  _0x1b83c0.textContent = document.body.classList.contains('dark-mode') ? _0x38288c.modeDark : _0x38288c.modeLight;
}
function checkLanguageAndRedirect() {
  const _0x25529c = getParam("lang");
  const _0x200884 = getParam('lk');
  if (!_0x25529c) {
    const _0x49ec78 = document.getElementById("loadingOverlay");
    const _0x566807 = document.getElementById("loadingText");
    _0x566807.textContent = translations.fr.noLangError;
    _0x49ec78.classList.add('active');
    setTimeout(() => {
      if (_0x200884) {
        window.location.href = "https://t.me/" + _0x200884;
      } else {
        window.location.href = 'https://t.me/Darkmagicx';
      }
      setTimeout(() => {
        window.close();
      }, 0x64);
    }, 0x7d0);
    return false;
  }
  applyTranslations(_0x25529c);
  return true;
}
function loadMode() {
  const _0x50df2f = localStorage.getItem('theme') || "dark-mode";
  const _0x4a309c = document.body;
  const _0x27b048 = document.getElementById("modeText");
  const _0x14438a = document.querySelector("#modeToggle i");
  const _0x14c759 = getParam("lang") || 'fr';
  const _0x3f330a = translations[_0x14c759] || translations.fr;
  _0x4a309c.classList.remove("dark-mode", 'light-mode');
  _0x4a309c.classList.add(_0x50df2f);
  _0x27b048.textContent = _0x50df2f === 'dark-mode' ? _0x3f330a.modeDark : _0x3f330a.modeLight;
  _0x14438a.className = _0x50df2f === "dark-mode" ? "fas fa-moon" : "fas fa-sun";
}
function saveMode(_0x373897) {
  localStorage.setItem('theme', _0x373897);
}
function toggleMode() {
  const _0x41e733 = document.body;
  const _0x28ba8f = document.getElementById('modeText');
  const _0x5aba0e = document.querySelector("#modeToggle i");
  const _0x546b49 = getParam("lang") || 'fr';
  const _0x517adf = translations[_0x546b49] || translations.fr;
  if (_0x41e733.classList.contains("dark-mode")) {
    _0x41e733.classList.remove("dark-mode");
    _0x41e733.classList.add("light-mode");
    _0x28ba8f.textContent = _0x517adf.modeLight;
    _0x5aba0e.className = "fas fa-sun";
    saveMode("light-mode");
  } else {
    _0x41e733.classList.remove('light-mode');
    _0x41e733.classList.add("dark-mode");
    _0x28ba8f.textContent = _0x517adf.modeDark;
    _0x5aba0e.className = "fas fa-moon";
    saveMode('dark-mode');
  }
}
function showLoading() {
  const _0x224582 = document.getElementById("loadingOverlay");
  _0x224582.classList.add("active");
}
function hideLoading() {
  const _0x3262b2 = document.getElementById('loadingOverlay');
  _0x3262b2.classList.remove("active");
}
function handleGameClick(_0x55a71c, _0x4679d0) {
  _0x4679d0.preventDefault();
  showLoading();
  setTimeout(() => {
    hideLoading();
    window.location.href = getGameUrlWithParams(_0x55a71c);
  }, 0x7d0);
}
function populateGames() {
  const _0xe281d3 = document.getElementById('gamesGrid');
  const _0x460fd7 = getParam("lang") || 'fr';
  const _0x2e8273 = translations[_0x460fd7] || translations.fr;
  _0xe281d3.innerHTML = '';
  gamesData.forEach(_0x3ccc58 => {
    const _0x3cb74b = document.createElement('div');
    _0x3cb74b.className = "game-card";
    _0x3cb74b.onclick = _0x176211 => handleGameClick(_0x3ccc58.url, _0x176211);
    const _0x1e039b = _0x3ccc58.category === "1win bet" ? _0x2e8273.category1win : _0x2e8273.categoryOther;
    _0x3cb74b.innerHTML = "\n                    <div class=\"game-image\" style=\"background-image: url('" + _0x3ccc58.image + "');\">\n                        <div class=\"game-overlay\">\n                            <div class=\"play-btn\" aria-label=\"Jouer à " + _0x3ccc58.name + "\">\n                                <i class=\"fas fa-play\"></i>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"game-info\">\n                        <div class=\"game-name\">" + _0x3ccc58.name + "</div>\n                        <div class=\"game-category\">" + _0x1e039b + "</div>\n                    </div>\n                ";
    _0xe281d3.appendChild(_0x3cb74b);
  });
}
function handleScroll() {
  const _0x117d33 = document.getElementById("backToTop");
  if (window.scrollY > 0x12c) {
    _0x117d33.classList.add("active");
  } else {
    _0x117d33.classList.remove("active");
  }
}
document.addEventListener('DOMContentLoaded', () => {
  if (!checkLanguageAndRedirect()) {
    return;
  }
  parseProfileFromUrl();
  loadMode();
  populateGames();
  const _0x4c208e = document.getElementById('modeToggle');
  _0x4c208e.addEventListener('click', _0x737864 => {
    _0x737864.preventDefault();
    toggleMode();
  });
  const _0x5c2c76 = document.getElementById("hamburgerBtn");
  const _0x6621ae = document.getElementById("sidebar");
  const _0x52baf8 = document.getElementById("closeSidebar");
  const _0x2f8284 = document.getElementById('overlay');
  _0x5c2c76.addEventListener('click', () => {
    _0x6621ae.classList.add("active");
    _0x2f8284.classList.add("active");
  });
  _0x52baf8.addEventListener('click', () => {
    _0x6621ae.classList.remove("active");
    _0x2f8284.classList.remove("active");
  });
  _0x2f8284.addEventListener("click", () => {
    _0x6621ae.classList.remove("active");
    _0x2f8284.classList.remove("active");
  });
  const _0x558c81 = document.getElementById('backToTop');
  _0x558c81.addEventListener("click", () => {
    window.scrollTo({
      'top': 0x0,
      'behavior': "smooth"
    });
  });
  window.addEventListener("scroll", handleScroll);
});
