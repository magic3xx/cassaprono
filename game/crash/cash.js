 let lastDisplayedTime = null;

    function handleNextRound() {
      const now = new Date();
      if (lastDisplayedTime) {
        lastDisplayedTime.setMinutes(lastDisplayedTime.getMinutes() + 5);
      } else {
        lastDisplayedTime = new Date(now.getTime());
        lastDisplayedTime.setMinutes(lastDisplayedTime.getMinutes() + 5);
      }
      triggerLoadingAnimation();
    }

    function updateTimeDisplay() {
      const hours = lastDisplayedTime.getHours().toString().padStart(2, '0');
      const minutes = lastDisplayedTime.getMinutes().toString().padStart(2, '0');
      const formattedTime = `Jouez à ${hours}:${minutes}`;
      const timeDisplay = document.getElementById('time-display');
      timeDisplay.innerText = formattedTime;
      timeDisplay.style.display = 'block';
    }

    function triggerLoadingAnimation() {
      const loadingText = document.getElementById('loading-text');
      loadingText.innerText = 'Loading...';
      animateLoadingDots();
      setTimeout(() => {
        const randomCoefficient = (Math.random() * (10 - 1) + 1).toFixed(2);
        loadingText.innerText = `${randomCoefficient}x`;
        updateTimeDisplay();
      }, 4000);
    }

    function animateLoadingDots() {
      const loadingText = document.getElementById('loading-text');
      const dots = loadingText.querySelectorAll('.dot');
      let activeDot = 0;
      const interval = setInterval(() => {
        dots.forEach((dot, index) => {
          dot.style.opacity = index === activeDot ? '1' : '0.3';
        });
        activeDot = (activeDot + 1) % dots.length;
      }, 500);
      setTimeout(() => clearInterval(interval), 4000);
    }

    // Lancer l'animation au chargement de la page
    animateLoadingDots();