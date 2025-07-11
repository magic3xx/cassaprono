 predictBtn.onclick = () => {
            if (isPredicting) return;
            isPredicting = true;
            toggleButtons(true);

            cells.forEach(cell => {
                cell.innerHTML = '';
                cell.classList.remove('animate');
            });

            let trapRange;
            switch (count) {
                case 2: trapRange = [6, 10]; break;
                case 3: trapRange = [5, 9]; break;
                case 4: trapRange = [5, 8]; break;
                case 5: trapRange = [4, 7]; break; // Corrigé ici (précédemment [4, 5])
                case 6: trapRange = [3, 6]; break;
                case 7: trapRange = [3, 5]; break;
                case 8: trapRange = [2, 4]; break;
                case 9: trapRange = [2, 3]; break;
                default: trapRange = [2, 2];
            }

            const trapCount = Math.floor(Math.random() * (trapRange[1] - trapRange[0] + 1)) + trapRange[0];
            let indexes = [];
            while (indexes.length < trapCount) {
                const rand = Math.floor(Math.random() * cells.length);
                if (!indexes.includes(rand)) indexes.push(rand);
            }

            indexes.forEach((index, i) => {
                const cell = cells[index];
                cell.classList.add('animate');
                setTimeout(() => {
                    const img = document.createElement('img');
                    img.src = trapImage;
                    img.alt = "Piège";
                    cell.appendChild(img);
                    if (i === indexes.length - 1) {
                        isPredicting = false;
                        toggleButtons(false);
                    }
                }, 300 + i * 100); // Staggered animation
            });
        };

        resetBtn.onclick = () => {
            if (isPredicting) return;
            count = 2;
            updateDisplay();
            cells.forEach((cell, i) => {
                cell.classList.add('animate');
                cell.innerHTML = '';
                setTimeout(() => cell.classList.remove('animate'), 300 + i * 50); // Staggered reset
            });
        };

        document.getElementById("backButton").addEventListener('click', () => {
            window.history.back();
        });

        updateDisplay();