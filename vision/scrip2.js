function hideLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.remove('active');
}

function handleGameClick(url, event) {
    event.preventDefault();
    showLoading();
    setTimeout(() => {
        hideLoading();
        window.location.href = url;
    }, 1500);
}

// Populate games grid
function populateGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';
    gamesData.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.onclick = (e) => handleGameClick(game.url, e);
        gameCard.innerHTML = `
            <div class="game-image" style="background-image: url('${game.image}');">
                <div class="game-overlay">
                    <div class="play-btn">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            </div>
            <div class="game-info">
                <div class="game-name">${game.name}</div>
            </div>
        `;
        gamesGrid.appendChild(gameCard);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    parseProfileFromUrl();
    loadMode();
    populateGames();
    updateCarousel();
    startAutoSlide();

    // Carousel interactions
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            currentSlide = index;
            updateCarousel();
            setTimeout(startAutoSlide, 5000); // Resume auto-slide after 5 seconds
        });
    });

    // Mode toggle
    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMode();
    });

    // Hamburger menu
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const overlay = document.getElementById('overlay');

    hamburgerBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});