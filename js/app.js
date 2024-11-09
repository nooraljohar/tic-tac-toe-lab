/*-------------------------------- Constants --------------------------------*/
const board =['', '', '', '', '', '', '', '', '']; 
const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Center column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ]

/*---------------------------- Variables (state) ----------------------------*/
let turn ='X';
//let winner = false;
let tie = false;


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('#statusMessage');
const resetButton = document.getElementById('resetButton');
       



/*-------------------------------- Functions --------------------------------*/
const placePiece = ()=> {
    squareEls.forEach((squareEl, index) => {
    squareEl.addEventListener('click', () => {
        console.log(`Square ${index + 1} was clicked!`);}); })
    resetButton.addEventListener("click",resetGame)
    messageEl.textContent = `${turn}'s turn`;
    running=true;}


const handleClick = (index) => {
    if (board[index] !== '') 
        return;
    board[index] = tie;
    updateBoard();

const currentPlayer = (tie === 'X') ? 'O' : 'X';
    messageEl.textContent = `Player ${tie}'s turn`;
}

const updateBoard = (squareEls,index) => {
    board.forEach((value, index) => {
        const square = squareEls[index];  // Get the corresponding square DOM element
        square.textContent = value;       // Set the text of the square (X, O, or empty)
        
        // Apply styling based on the value (X or O)
        if (value === 'X') {
            square.classList.add('x');
            square.classList.remove('o');
        } else if (value === 'O') {
            square.classList.add('o');
            square.classList.remove('x');
        } else {
            square.classList.remove('x', 'o');}

    const changeplayer = () => {
        tie = ( tie == "X") ? "O" : "X";
        messageEl.textContent = `${tie}'s turn`;
    }
const checkWinner = () => { 
    let roundWon  = false;

    for (i=0; i<winningCombos.lengh; i++)
        {
            const condtion = winningCombos[i];
            const cellA = board[condition[0]];
            const cellB = board[condition[1]];
            const cellC = board[condition[2]];

            if (cellA == "" || cellB == "" || cellC ==""){
                continue;
            }
            if (cellA == cellB && cellB == cellC)
                roundWon = true;
            break;
        }

        if(rounWon){
            messageEl.textContent = `${tie} wins!`
            running = false;
        } else if (board.includes("")){
            messageEl.textContent = `draw!`;
            running =false;
        }
/*----------------------------- Event Listeners -----------------------------*/
