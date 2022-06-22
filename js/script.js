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

// 
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

console.log(cells);

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

// console.log(swapPlayer());
// console.log(swapPlayer());
// console.log(swapPlayer());
// console.log(swapPlayer());

// // When cell is clicked, insert currentPlayer into selected cell, then swap turns. Use event.target.
// const clickTarget = (event) => {
//     const cell = event.target;
//     // Insert current player's move
//     const insertMove = (cell, currentPlayer) => {
//         cell.innerHTML = currentPlayer
//     }
//     insertMove(cell, currentPlayer);
//     swapPlayer();
//     console.log('cell clicked');
// }

// When cell is clicked, insert currentPlayer into selected cell, then swap turns. Use event.target.
const clickTarget = (event) => {
    const cell = event.target;
    // Insert current player's move
    const insertMove = (cell, currentPlayer) => {
        cell.classList.add(currentPlayer)
    }
    insertMove(cell, currentPlayer);
    swapPlayer();
    console.log('cell clicked');
}

// Clicking each cell can occur only once. 
cells.forEach(cell => {
    cell.addEventListener('click', clickTarget, {once: true})
})

// Winning condition
const winningConditions = [
    [0, 1, 2],
    // [3, 4, 5], 
    // [6, 7, 8],
    // [0, 3, 6],
    // [1, 4, 7],
    // [2, 5, 8],
    // [0, 4, 8],
    // [2, 4, 6]
];

// const isWin = () => {
//     for (let condition of winningConditions) {
//         let c0 = condition[0]
//         let c1 = condition[1]
//         let c2 = condition[2]
//         let cell0 = cells[c0]
//         let cell1 = cells[c1]
//         let cell2 = cells[c2]
//         const playerX = document.getElementsByClassName.x
//         const playerO = 

//         if (cell0 === cell1 && cell1 === cell2) {
//             if (cell0 === playerX)
//         }
        
//         console.log(cell0.classList.contains('x'));
//         console.log(cell1.classList.contains('x'));
//         console.log(cell2.classList.contains('x'));
//     }
// }
// isWin()

// Test alert function 
const reset = () => {
    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('o');
    })
    console.log('Board reset');
}

reset()

// Replay button
replay.addEventListener('click', reset)

