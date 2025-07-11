  // Traductions
        const translations = {
            fr: {
                pageTitle: "Prédiction",
                bille1: "1 bille x2.91",
                billes2: "2 billes x1.45",
                predictButton: "Prédiction",
                backButton: "Retour",
                notificationChoose: "Veuillez sélectionner une option avant de procéder",
                notificationError: " Veuillez sélectionner une option avant de procéder."
            }
        };

        // Initialisation de la langue
        function updateLanguage() {
            const t = translations.fr;
            document.documentElement.lang = 'fr';
            document.getElementById('page-title').textContent = t.pageTitle;
            document.getElementById('bille1-btn').textContent = t.bille1;
            document.getElementById('billes2-btn').textContent = t.billes2;
            document.getElementById('predictBtn').textContent = t.predictButton;
            document.getElementById('back-button-text').textContent = t.backButton;
            document.getElementById('notification').textContent = t.notificationChoose;
        }

        updateLanguage();

        // Animation des particules
        let particleCount = 0;
        const maxParticles = 40;

        function createParticle() {
            if (particleCount >= maxParticles) return;
            
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const startX = Math.random() * 80 + 10;
            particle.style.left = `${startX}vw`;
            particle.style.setProperty('--direction', Math.random() > 0.5 ? 1 : -1);
            
            const size = Math.random() * 0.3 + 0.2;
            particle.style.width = `${size}vmin`;
            particle.style.height = `${size}vmin`;
            
            const duration = 8 + Math.random() * 4;
            const delay = Math.random() * 2;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            document.body.appendChild(particle);
            particleCount++;
            
            setTimeout(() => {
                particle.remove();
                particleCount--;
            }, (duration + delay) * 1000);
        }

        setInterval(() => {
            if (Math.random() > 0.4) {
                for (let i = 0; i < Math.floor(Math.random() * 2) + 1; i++) {
                    createParticle();
                }
            }
        }, 1200);

        // Initialisation
        window.onload = function() {
            const notification = document.getElementById('notification');
            notification.textContent = translations.fr.notificationChoose;
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 4000);
        };

        function predict() {
            const selectedBet = document.querySelector('.bet-btn[selected]');
            const loader = document.getElementById('loader');
            const overlay = document.getElementById('overlay');
            const gobelets = document.querySelectorAll('.ball-img');
            const notification = document.getElementById('notification');
            const betButtons = document.querySelectorAll('.bet-btn');

            if (!selectedBet) {
                notification.textContent = translations.fr.notificationError;
                notification.style.display = 'block';
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 4000);
                return;
            }

            gobelets.forEach(gobelet => gobelet.classList.remove('moved'));
            betButtons.forEach(btn => btn.removeAttribute('selected'));
            selectedBet.setAttribute('selected', '');

            overlay.style.display = 'block';
            loader.style.display = 'block';

            setTimeout(() => {
                loader.style.display = 'none';
                overlay.style.display = 'none';

                const indices = [0, 1, 2];
                let selectedIndices = [];

                if (selectedBet.getAttribute('data-value') === 'billes2') {
                    selectedIndices = indices.sort(() => Math.random() - 0.5).slice(0, 2);
                } else {
                    selectedIndices = [indices[Math.floor(Math.random() * indices.length)]];
                }

                selectedIndices.forEach(index => {
                    gobelets[index].classList.add('moved');
                });

                setTimeout(() => {
                    gobelets.forEach(gobelet => gobelet.classList.remove('moved'));
                }, 4000);
            }, 4000);
        }

        document.querySelectorAll('.bet-btn').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.bet-btn').forEach(btn => btn.removeAttribute('selected'));
                this.setAttribute('selected', '');
            });
        });

        // Bouton Retour
        document.getElementById('backButton').addEventListener('click', () => {
            window.history.back();
        });

        // Attacher les événements aux boutons
        document.getElementById('predictBtn').addEventListener('click', predict);