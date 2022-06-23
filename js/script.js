// Play & Replay
const play = document.querySelector('.play')
const replay = document.querySelector('.replay')

// Board and cells
const board = document.querySelector('.board')
const cells = document.querySelectorAll('.cell')
const topLeft = document.querySelector('#top-left')
const topMid = document.querySelector('#top-mid')
const topright = document.querySelector('#top-right')
const midLeft = document.querySelector('#mid-left')
const midMid = document.querySelector('#mid-mid')
const midRight = document.querySelector('#mid-right')
const btmLeft = document.querySelector('#btm-left')
const btmMid = document.querySelector('#btm-mid')
const btmRight = document.querySelector('#btm-right')

// Header neon blink
const neonBlink = document.querySelector('.neon-blink')

// Win message
const winText = document.querySelector('.win-message')

// Players
const playerX = 'X';
const playerO = 'O';

// Starting scores
const xScore = document.querySelector('.score-x')
const oScore = document.querySelector('.score-o')
let playerXScore = 0;
let playerOScore = 0;
let tieScore = 0;

// Starting player
let currentPlayer = 'x';

// Swap turn
const swapPlayer = () => {
    if (currentPlayer === 'x') {
        winText.textContent = "O's turn."
        return currentPlayer = 'o'
    } else {
        winText.textContent = "X's turn."
        return currentPlayer = 'x'
    }
}

// updateScore function. Placed in isWin() below.
const updateScore = (winner) => {
    if (winner === 'x') {
        playerXScore += 1
        return xScore.textContent = `${playerXScore}`
    } else if (winner === 'o') {
        playerOScore += 1
        return oScore.textContent = `${playerOScore}`
    }
}

// Check win function. 
const isWin = () => {
    // Loop through each of the winning conditions above.
    for (let condition of winningConditions) {
        let c0 = condition[0]
        let c1 = condition[1]
        let c2 = condition[2]
        let cell0 = cells[c0]
        let cell1 = cells[c1]
        let cell2 = cells[c2]

        // Condition if all winning conditions are 'x'. If 'x' meets winning conditions, +1 to playerX score, end game to announce that X won.
        if (cell0.classList.contains('x') && cell1.classList.contains('x') && cell2.classList.contains('x')) {
            updateScore('x')
            endGame(playerX)

        // Condition if all winning conditions are O. If O meets winning conditions, +1 to playerO score, end game to announce that O won.
        } else if (cell0.classList.contains('o') && cell1.classList.contains('o') && cell2.classList.contains('o')){
            updateScore('o')
            endGame(playerO)
            // console.log('O is the winner!');
        }


    }
}

const isDraw = () => {

}


// When cell is clicked, insert currentPlayer into selected cell, then swap turns. Use event.target.
const clickTarget = (event) => {
    const cell = event.target;
    // Insert current player's move
    const insertMove = (cell, currentPlayer) => {
        cell.classList.add(currentPlayer)
    }
    insertMove(cell, currentPlayer);
    swapPlayer();
    isWin();
    console.log('cell clicked');
}

// Winning conditions. 3 rows, 3 columns, and 2 diagonals.
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to end the game. 
const endGame = (winningPlayer) => {
    // Prevent further moves
    cells.forEach(cell => {
        cell.removeEventListener('click', clickTarget)
    })
    // Show the win message
    winText.style.opacity = 1
    winText.textContent = `Player ${winningPlayer} wins!`
}

// Start function 
const start = () => {
    // Initiate click eventListener. Cannot click until PLAY button is clicked. Click event can only occur once per cell.
    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.addEventListener('click', clickTarget, {once: true})
    })
    neonBlink.style.animation = "none";     // Turn off header flicker animation every start.
    currentPlayer = 'x';                    // Reset current player to X.
    winText.style.opacity = 0;              // Hide win message.
    winText.textContent = "X to start."     // Prompt player X to start.
    play.textContent = 'REPLAY';            // Change 'PLAY' to 'REPLAY'.
    play.style.width = '225px'              // Auto increase 'REPLAY' width.
    console.log('Board reset');
}

// Play/Replay button
play.addEventListener('click', start)

