const gamesData = [
    { name: "Crash", url: "game/crash/crash.html", image: "game/crash/vision/image.jpg", category: "Crash" },
    { name: "Apple Of Fortune", url: "game/apple/applegame.html", image: "https://i.ibb.co/tPpXfchb/IMG-20250706-150700-297.jpg", category: "Crash" },
    { name: "Thimble", url: "game/boll/Thimble.html", image: "https://i.ibb.co/7x72SV2h/IMG-20250706-150656-689.jpg", category: "Crash" },
    { name: "Mines Gems", url: "game/grile/mine.html", image: "https://i.ibb.co/TBBRzMnZ/IMG-20250706-150651-388.jpg", category: "Strategy" }
];

// Liste de textes aléatoires pour le carrousel
const captions = [
    "Gagnez avec des prédictions !",
    "Prenez vos risques et gagnez vite les paris !",
    "Misez malin, gagnez gros !",
    "Boostez vos gains avec nos prédictions !",
    "Pariez maintenant, triomphez demain !",
    "Faites confiance à votre instinct et gagnez !"
];

// Fonction pour obtenir un texte aléatoire
function getRandomCaption() {
    return captions[Math.floor(Math.random() * captions.length)];
}

// Parse URL for profile information
function getParam(nom) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nom);
}

function parseProfileFromUrl() {
    const username = getParam("us");
    const id = getParam("i");
    const lien = getParam("lk");

    if (id && username && lien) {
        const telegramLink = `https://t.me/${lien}`;

        // Update profile button
        const profileBtn = document.getElementById('profileBtn');
        profileBtn.setAttribute('href', telegramLink);

        // Update profile info
        const profileInfo = document.getElementById('profileInfo');
        const profileName = document.getElementById('profileName');
        const profileId = document.getElementById('profileId');

        profileName.textContent = username;
        profileName.setAttribute('href', telegramLink);
        profileId.textContent = `ID: ${id}`;
        profileInfo.style.display = 'flex';
    }
}

// Load mode from localStorage or set default to dark-mode
function loadMode() {
    const savedMode = localStorage.getItem('theme') || 'dark-mode';
    const body = document.body;
    const modeText = document.getElementById('modeText');
    const modeIcon = document.querySelector('#modeToggle i');

    body.classList.remove('dark-mode', 'light-mode');
    body.classList.add(savedMode);
    modeText.textContent = savedMode === 'dark-mode' ? 'Mode Sombre' : 'Mode Clair';
    modeIcon.className = savedMode === 'dark-mode' ? 'fas fa-moon' : 'fas fa-sun';
}

// Save mode to localStorage
function saveMode(mode) {
    localStorage.setItem('theme', mode);
}

// Toggle mode on click
function toggleMode() {
    const body = document.body;
    const modeText = document.getElementById('modeText');
    const modeIcon = document.querySelector('#modeToggle i');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeText.textContent = 'Mode Clair';
        modeIcon.className = 'fas fa-sun';
        saveMode('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeText.textContent = 'Mode Sombre';
        modeIcon.className = 'fas fa-moon';
        saveMode('dark-mode');
    }
}

// Carousel functionality
let currentSlide = 0;
const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('.carousel-dot');
const captionsElements = document.querySelectorAll('.carousel-caption');
const totalSlides = 3;
let autoSlideInterval;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    // Gérer la visibilité et le texte des légendes
    captionsElements.forEach((caption, index) => {
        if (index === currentSlide) {
            caption.textContent = getRandomCaption();
            caption.classList.add('active');
        } else {
            caption.textContent = ''; // Vider le texte des légendes non actives
            caption.classList.remove('active');
        }
    });
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Loading functionality
function showLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.add('active');
}

