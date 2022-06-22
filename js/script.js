// What technologies will it use?
// HTML
// CSS
// JavaScript

// What are the base features in tic-tac-toe?
// Board. 3x3 grid. Maybe 4x4? 5x5? How many adjustments can you make?
// 2 players -> Either PvP or PvAI (AI difficulty modes?)
// 2 avatars. X vs O. (Customisable?)
// Live score. Who has won how many rounds? 
// 

// When clicked, show X. 
// When clicked, show O.
//

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

// Win message
const winText = document.querySelector('.win-message')

// Players
const playerX = 'X';
const playerO = 'O';

// Starting scores
let playerXScore = 0;
let playerOScore = 0;
let tieScore = 0;

// Starting player
let currentPlayer = 'x';

// Swap turn
const swapPlayer = () => {
    if (currentPlayer === 'x') {
        return currentPlayer = 'o'
    } else {
        return currentPlayer = 'x'
    }
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

// Clicking each cell can occur only once. 
cells.forEach(cell => {
    cell.addEventListener('click', clickTarget, {once: true})
})

// Winning condition
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
            playerXScore += 1
            endGame(playerX)
            // console.log('X is the winner!');

        // Condition if all winning conditions are O. If O meets winning conditions, +1 to playerO score, end game to announce that O won.
        } else if (cell0.classList.contains('o') && cell1.classList.contains('o') && cell2.classList.contains('o')){
            playerOScore += 1
            endGame(playerO)
            // console.log('O is the winner!');
        }
    }
}

// const updateScore = (winner) => {

// }

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

// winText.innerHTML = `Player so-so wins!`

// .innerHTML = `Player X Score: ${playerXScore}`
// .innerHTML = `Player O Score: ${playerOScore}`

// Restart function 
const restart = () => {
    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.addEventListener('click', clickTarget, {once: true})
    })
    currentPlayer = 'x';
    winText.style.opacity = 0
    console.log('Board reset');
}

// Replay button
replay.addEventListener('click', restart)

