/*-------------------------------- Constants --------------------------------*/
const board = ['', '', '', '', '', '', '', '', '']; 
const winningCombos = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Center column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [2, 4, 6], // Diagonal from top-right to bottom-left
];

/*---------------------------- Variables (state) ----------------------------*/
let turn = 'X';
let winner = false;
let tie = false;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('statusMessage'); 
const resetButton = document.getElementById('resetButton');

/*---------------------------- Event Listeners ----------------------------*/
squareEls.forEach((square, index) => {
  square.addEventListener('click', () => handleSquareClick(index));
});

resetButton.addEventListener('click', resetGame);

/*---------------------------- Functions ----------------------------*/

function handleSquareClick(index) {
  if (board[index] !== '' || winner || tie) {
    return; 
  }

  
  board[index] = turn;
  updateBoard();

  
  if (checkWinner()) {
    messageEl.textContent = `Player ${turn} wins!`; 
    winner = true; 
    return; 
  } 
  
  else if (board.every(square => square !== '')) {
    messageEl.textContent = 'It\'s a tie!'; 
    tie = true; 
    return; 
  }

  
  turn = turn === 'X' ? 'O' : 'X';
  messageEl.textContent = `Player ${turn}'s turn`; 
}

function updateBoard() {
  board.forEach((value, index) => {
    const square = squareEls[index];
    square.textContent = value;
    square.className = `sqr ${value.toLowerCase()}`;
  });
}

function checkWinner() {

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true; 
    }
  }
  return false; 
}

function resetGame() {
  
  board.fill('');
  winner = false;
  tie = false;
  turn = 'X'; 

  squareEls.forEach(square => {
    square.textContent = '';
    square.className = 'sqr empty'; 
  });

  messageEl.textContent = 'Player X\'s turn'; 
}
