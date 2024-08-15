const jsonData = [
  {
    "word": "WHO",
    "x": 14,
    "y": 0,
    "direction": "vertical",
    "hintCells": [
      {
        "x": 14,
        "y": 2
      }
    ]
  },
  {
    "word": "FOG",
    "x": 13,
    "y": 2,
    "direction": "horizontal",
    "hintCells": [
      {
        "x": 14,
        "y": 2
      },
      {
        "x": 13,
        "y": 2
      },
      {
        "x": 15,
        "y": 2
      }
    ]
  },
  {
    "word": "TOY",
    "x": 15,
    "y": 4,
    "direction": "horizontal",
    "hintCells": []
  },
  {
    "word": "OF",
    "x": 15,
    "y": 3,
    "direction": "horizontal",
    "hintCells": []
  },
  {
    "word": "TO",
    "x": 12,
    "y": 3,
    "direction": "horizontal",
    "hintCells": []
  },
  {
    "word": "FOR",
    "x": 16,
    "y": 3,
    "direction": "vertical",
    "hintCells": []
  },
  {
    "word": "TAG",
    "x": 12,
    "y": 3,
    "direction": "vertical",
    "hintCells": []
  },
  {
    "word": "FOX",
    "x": 13,
    "y": 2,
    "direction": "vertical",
    "hintCells": [
      {
        "x": 13,
        "y": 2
      }
    ]
  },
  {
    "word": "FAX",
    "x": 11,
    "y": 4,
    "direction": "horizontal",
    "hintCells": []
  },
  {
    "word": "GOT",
    "x": 15,
    "y": 2,
    "direction": "vertical",
    "hintCells": [
      {
        "x": 15,
        "y": 2
      }
    ]
  },
  // {
  //   "word": "TABIAT",
  //   "x": 9,
  //   "y": 2,
  //   "direction": "horizontal",
  //   "hintCells": [
  //     {
  //       "x": 10,
  //       "y": 2
  //     },
  //     {
  //       "x": 14,
  //       "y": 2
  //     },
  //     {
  //       "x": 11,
  //       "y": 2
  //     }
  //   ]
  // },
  // {
  //   "word": "CICEK",
  //   "x": 12,
  //   "y": 1,
  //   "direction": "vertical",
  //   "hintCells": []
  // },
  // {
  //   "word": "BAHCE",
  //   "x": 11,
  //   "y": 2,
  //   "direction": "vertical",
  //   "hintCells": [
  //     {
  //       "x": 11,
  //       "y": 2
  //     }
  //   ]
  // },
  // {
  //   "word": "ORMAN",
  //   "x": 14,
  //   "y": 3,
  //   "direction": "horizontal",
  //   "hintCells": [
  //     {
  //       "x": 14,
  //       "y": 3
  //     }
  //   ]
  // },
  // {
  //   "word": "DAG",
  //   "x": 10,
  //   "y": 1,
  //   "direction": "vertical",
  //   "hintCells": [
  //     {
  //       "x": 10,
  //       "y": 2
  //     }
  //   ]
  // },
  // {
  //   "word": "AY",
  //   "x": 15,
  //   "y": 7,
  //   "direction": "vertical",
  //   "hintCells": []
  // },
  // {
  //   "word": "KAR",
  //   "x": 14,
  //   "y": 7,
  //   "direction": "horizontal",
  //   "hintCells": [
  //     {
  //       "x": 14,
  //       "y": 7
  //     }
  //   ]
  // },
  // {
  //   "word": "TOPRAK",
  //   "x": 14,
  //   "y": 2,
  //   "direction": "vertical",
  //   "hintCells": [
  //     {
  //       "x": 14,
  //       "y": 3
  //     },
  //     {
  //       "x": 14,
  //       "y": 6
  //     },
  //     {
  //       "x": 14,
  //       "y": 2
  //     },
  //     {
  //       "x": 14,
  //       "y": 7
  //     }
  //   ]
  // },
  // {
  //   "word": "ELMAS",
  //   "x": 11,
  //   "y": 6,
  //   "direction": "horizontal",
  //   "hintCells": [
  //     {
  //       "x": 14,
  //       "y": 6
  //     }
  //   ]
  // },
  // {
  //   "word": "GUNDOGUMU",
  //   "x": 10,
  //   "y": 3,
  //   "direction": "vertical",
  //   "hintCells": [
  //     {
  //       "x": 10,
  //       "y": 7
  //     },
  //     {
  //       "x": 10,
  //       "y": 10
  //     },
  //     {
  //       "x": 10,
  //       "y": 11
  //     }
  //   ]
  // },
  // {
  //   "word": "DUMAN",
  //   "x": 6,
  //   "y": 5,
  //   "direction": "horizontal",
  //   "hintCells": [
  //     {
  //       "x": 6,
  //       "y": 5
  //     }
  //   ]
  // },
  // {
  //   "word": "GOLGE",
  //   "x": 10,
  //   "y": 8,
  //   "direction": "horizontal",
  //   "hintCells": [
  //     {
  //       "x": 13,
  //       "y": 8
  //     }
  //   ]
  // },
  // {
  //   "word": "DURU",
  //   "x": 7,
  //   "y": 11,
  //   "direction": "horizontal",
  //   "hintCells": [
  //     {
  //       "x": 10,
  //       "y": 11
  //     }
  //   ]
  // },
  // {
  //   "word": "UMUT",
  //   "x": 10,
  //   "y": 9,
  //   "direction": "vertical",
  //   "hintCells": [
  //     {
  //       "x": 10,
  //       "y": 10
  //     },
  //     {
  //       "x": 10,
  //       "y": 11
  //     }
  //   ]
  // },
  // {
  //   "word": "KANO",
  //   "x": 7,
  //   "y": 7,
  //   "direction": "horizontal",
  //   "hintCells": [
  //     {
  //       "x": 10,
  //       "y": 7
  //     }
  //   ]
  // },
  // {
  //   "word": "GEMİ",
  //   "x": 13,
  //   "y": 8,
  //   "direction": "vertical",
  //   "hintCells": [
  //     {
  //       "x": 13,
  //       "y": 8
  //     }
  //   ]
  // },
  // {
  //   "word": "GÖZLEM",
  //   "x": 5,
  //   "y": 10,
  //   "direction": "horizontal",
  //   "hintCells": [
  //     {
  //       "x": 10,
  //       "y": 10
  //     },
  //     {
  //       "x": 5,
  //       "y": 10
  //     }
  //   ]
  // }
];

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('grid-container');
  const lettersContainer = document.getElementById('letters');
  const gridWrapper = document.getElementById('grid-wrapper');

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

  // Calculate the area occupied by the words
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

  // Determine grid size
  const gridWidth = Math.min(maxX - minX + 1, 15);
  const gridHeight = Math.min(maxY - minY + 1, 15);

  // Create the grid cells
  for (let i = 0; i < gridWidth * gridHeight; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    gridContainer.appendChild(cell);
  }

  const gridCells = document.querySelectorAll('.grid-cell');

  jsonData.forEach((item) => {
    const { word, x, y, direction, hintCells } = item;
    let row = y - minY;
    let col = x - minX;

    for (let i = 0; i < word.length; i++) {
      const index = row * gridWidth + col;

      // Check if index is within bounds
      if (index >= 0 && index < gridCells.length) {
        const cell = gridCells[index];
        cell.classList.add('placeholder');
        cell.dataset.letter = word[i];
        cell.dataset.word = item.word; // Store the word for each cell

        // Check if current cell is in the hintCells array
        const isHintCell = hintCells.some(hint => hint.x === (x + (direction === 'horizontal' ? i : 0)) && hint.y === (y + (direction === 'vertical' ? i : 0)));
        if (isHintCell) {
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

  function adjustCellSize() {
    const gridWrapperWidth = gridWrapper.clientWidth;
    const gridWrapperHeight = gridWrapper.clientHeight;

    const maxCellSize = 48;

    // Grid hücreleri arasındaki boşluk
    const cellGap = parseFloat(window.getComputedStyle(gridContainer).gap);

    // Grid boyutları ile hücre boyutlarını hesapla
    const cellSizeWidth = (gridWrapperWidth - (gridWidth - 1) * cellGap) / gridWidth;
    const cellSizeHeight = (gridWrapperHeight - (gridHeight - 1) * cellGap) / gridHeight;

    // Hücre boyutunu kısıtla
    const cellSize = Math.min(cellSizeWidth, cellSizeHeight, maxCellSize);

    // Grid container'ın hücre boyutlarını ayarla
    gridContainer.style.gridTemplateColumns = `repeat(${gridWidth}, ${cellSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridHeight}, ${cellSize}px)`;
  }

  // Initial adjustment
  adjustCellSize();

  // Adjust cell size on window resize
  window.addEventListener('resize', adjustCellSize);
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

      // Play the correct placement sound
      correctSound.volume = 0.5;
      correctSound.currentTime = 0;
      correctSound.play();
    } else {
      target.classList.add('incorrect');
      target.classList.remove('correct');

      // Play the incorrect placement sound
      incorrectSound.volume = 0.5;
      incorrectSound.currentTime = 0;
      incorrectSound.play();
    }

    target.dataset.userPlaced = 'true'; // Mark the cell as having a user-placed letter

    // Check for completion after each drop
    checkCompletion();
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

function checkCompletion() {
  const gridCells = document.querySelectorAll('.grid-cell');

  const letterCells = Array.from(gridCells).filter(cell => cell.dataset.letter);

  const allCorrect = letterCells.every(cell => {
    const isCorrect = cell.classList.contains('correct');
    const isHint = cell.classList.contains('hint');
    return isCorrect || isHint;
  });

  if (allCorrect) {
    showCongratulations();
  }
}

function showCongratulations() {
  const congratulationsMessage = document.getElementById('congratulations-message');
  const container = document.getElementById('outer-container');
  const fireworksSound = document.getElementById('fireworks-sound');
  const clapSound = document.getElementById('clap-sound');

  congratulationsMessage.style.display = 'block';
  container.style.display = 'none';

  fireworksSound.volume = 0.5;
  fireworksSound.currentTime = 0;
  fireworksSound.play();

  clapSound.volume = 0.5;
  clapSound.currentTime = 0;
  clapSound.play();
}
