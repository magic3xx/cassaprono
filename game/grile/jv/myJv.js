    const trapImage = "https://i.ibb.co/Swh0qp9d/20250512-220505.jpg";
        const grid = document.getElementById("gameGrid");
        const countDisplay = document.getElementById("trapCount");
        const predictBtn = document.getElementById("predictBtn");
        const resetBtn = document.getElementById("resetBtn");
        const increaseBtn = document.getElementById("increase");
        const decreaseBtn = document.getElementById("decrease");
        const preloader = document.getElementById("preloader");
        const mainContainer = document.getElementById("mainContainer");
        let count = 2;
        let isPredicting = false;

        // Preloader logic
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('hidden');
                mainContainer.classList.add('visible');
            }, 1500); // 1.5s delay for preloader
        });

        // Initialize grid
        for (let i = 0; i < 25; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
        }
        const cells = document.querySelectorAll('.cell');

        function updateDisplay() {
            countDisplay.textContent = `${count} piège${count > 1 ? 's' : ''}`;
        }

        function toggleButtons(disabled) {
            predictBtn.disabled = disabled;
            resetBtn.disabled = disabled;
            increaseBtn.disabled = disabled;
            decreaseBtn.disabled = disabled;
        }

        increaseBtn.onclick = () => {
            if (count < 9) {
                count++;
                updateDisplay();
            }
        };

        decreaseBtn.onclick = () => {
            if (count > 2) {
                count--;
                updateDisplay();
            }
        };

       