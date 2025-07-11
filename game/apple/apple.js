 // Afficher contenu après chargement
    setTimeout(() => {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('content').classList.add('visible');
    }, 3000);

    // Ajouter une nouvelle ligne
    function addNewRow() {
      const circleContainer = document.getElementById('circleContainer');
      const rows = circleContainer.querySelectorAll('.circle-row');
      const predictButton = document.getElementById('predictButton');

      if (rows.length >= 10) {
        const alertBox = document.getElementById('alertBox');
        alertBox.style.display = 'block';
        predictButton.disabled = true;
        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 4000);
        return false;
      }

      const newRow = document.createElement('div');
      newRow.classList.add('circle-row');
      for (let i = 0; i < 5; i++) {
        const newCircle = document.createElement('div');
        newCircle.classList.add('circle');
        newRow.appendChild(newCircle);
      }

      const rowNumber = document.createElement('span');
      rowNumber.classList.add('row-number');
      rowNumber.textContent = rows.length + 1;
      newRow.appendChild(rowNumber);

      circleContainer.prepend(newRow);
      return true;
    }

    // Bouton Prédictions
    document.getElementById('predictButton').addEventListener('click', () => {
      const predictButton = document.getElementById('predictButton');
      const loading = document.getElementById('prediction-loading');
      if (predictButton.disabled) return;

      predictButton.disabled = true;
      loading.style.display = 'flex';

      setTimeout(() => {
        loading.style.display = 'none';
        const circleContainer = document.getElementById('circleContainer');
        const rows = circleContainer.querySelectorAll('.circle-row');
        const currentRow = circleContainer.firstElementChild;

        // Ne pas ajouter d'image si la limite est atteinte
        if (rows.length >= 11) {
          const alertBox = document.getElementById('alertBox');
          alertBox.style.display = 'block';
          predictButton.disabled = true;
          setTimeout(() => {
            alertBox.style.display = 'none';
          }, 4000);
        } else if (currentRow) {
          const circles = currentRow.querySelectorAll('.circle');
          const randomIndex = Math.floor(Math.random() * circles.length);
          const randomCircle = circles[randomIndex];
          const image = document.createElement('img');
          image.src = "https://i.ibb.co/hBdQrHp/IMG-20241125-133222-422.jpg";
          image.alt = "Prediction Image";

          let img = randomCircle.querySelector('img');
          if (!img) {
            randomCircle.appendChild(image);
            img = image;
          }
          img.style.display = 'block';

          addNewRow();
        }
        predictButton.disabled = rows.length >= 10;
      }, 1500);
    });

    // Bouton Réinitialiser
    document.getElementById('resetButton').addEventListener('click', () => {
      const circleContainer = document.getElementById('circleContainer');
      const predictButton = document.getElementById('predictButton');
      circleContainer.innerHTML = `
        <div class="circle-row">
          <div class="circle" id="circle1"></div>
          <div class="circle" id="circle2"></div>
          <div class="circle" id="circle3"></div>
          <div class="circle" id="circle4"></div>
          <div class="circle" id="circle5"></div>
          <span class="row-number">1</span>
        </div>
      `;
      predictButton.disabled = false;
    });