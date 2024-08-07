const jsonData = [
  { "word": "TABIAT", "x": 6, "y": 4, "direction": "horizontal" },
  { "word": "DOGA", "x": 7, "y": 1, "direction": "vertical" },
  { "word": "AY", "x": 7, "y": 4, "direction": "vertical" },
  { "word": "HAVA", "x": 10, "y": 1, "direction": "vertical" },
  { "word": "AGAC", "x": 6, "y": 3, "direction": "horizontal" },
  { "word": "CİCEK", "x": 9, "y": 3, "direction": "vertical" },
];

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('grid-container');
  const lettersContainer = document.getElementById('letters');

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

  // Kelimelerin kapladığı alanı hesapla
  jsonData.forEach((item) => {
    const { word, x, y, direction } = item;
    if (direction === "horizontal") {
      maxX = Math.max(maxX, x + word.length - 1);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    } else {
      maxY = Math.max(maxY, y + word.length - 1);
      minY = Math.min(minY, y);
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
    }
  });

  const gridWidth = maxX - minX + 1;
  const gridHeight = maxY - minY + 1;

  gridContainer.style.gridTemplateColumns = `repeat(${gridWidth}, 42px)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridHeight}, 42px)`;

  // Create the grid cells
  for (let i = 0; i < gridWidth * gridHeight; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    gridContainer.appendChild(cell);
  }

  const gridCells = document.querySelectorAll('.grid-cell');

  jsonData.forEach((item) => {
    const { word, x, y, direction } = item;
    let row = y - minY;
    let col = x - minX;

    for (let i = 0; i < word.length; i++) {
      const index = row * gridWidth + col;

      // Check if index is within bounds
      if (index >= 0 && index < gridCells.length) {
        const cell = gridCells[index];
        cell.classList.add('placeholder');
        cell.dataset.letter = word[i];

        if (i === Math.floor(word.length / 2)) {
          cell.innerText = word[i];
          cell.classList.add('hint');
        }

        if (direction === 'horizontal') {
          col++;
        } else if (direction === 'vertical') {
          row++;
        }
      }
    }
  });

  // Create the letters
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let letter of alphabet) {
    const letterDiv = document.createElement('div');
    letterDiv.classList.add('letter');
    letterDiv.innerText = letter;
    letterDiv.draggable = true;
    letterDiv.addEventListener('dragstart', dragStart);
    lettersContainer.appendChild(letterDiv);
  }

  // Add event listeners for grid cells
  gridCells.forEach(cell => {
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('drop', drop);
    cell.addEventListener('click', removeLetter);
  });

  const cellSize = 80;
  const padding = 20;
  gridContainer.style.width = `${gridWidth * cellSize + padding}px`;
  gridContainer.style.height = `${gridHeight * cellSize + padding}px`;
});

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.innerText);
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const letter = e.dataTransfer.getData('text/plain');
  const target = e.target;

  const correctSound = document.getElementById('correct-sound');
  const incorrectSound = document.getElementById('incorrect-sound');

  if (target.classList.contains('placeholder') && !target.classList.contains('hint')) {
    target.innerText = letter;

    if (letter === target.dataset.letter) {
      target.classList.add('correct');
      target.classList.remove('incorrect');

      // Doğru yerleştirme sesi çalar
      correctSound.volume = 0.5;
      correctSound.currentTime = 0;
      correctSound.play();
    } else {
      target.classList.add('incorrect');
      target.classList.remove('correct');

      // Yanlış yerleştirme sesi çalar
      incorrectSound.volume = 0.5;
      incorrectSound.currentTime = 0;
      incorrectSound.play();
    }

    target.dataset.userPlaced = 'true'; // Mark the cell as having a user-placed letter
  }
}

function removeLetter(e) {
  const target = e.target;

  if (target.dataset.userPlaced === 'true' && !target.classList.contains('hint')) {
    target.innerText = '';
    target.classList.remove('correct', 'incorrect');
    target.removeAttribute('data-userPlaced');

    const removeSound = document.getElementById('remove-sound');
    removeSound.volume = 0.5;
    removeSound.currentTime = 0;
    removeSound.play();
  }
}
