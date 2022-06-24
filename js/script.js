// Play & Replay
const play = document.querySelector('.play');
const replay = document.querySelector('.replay');
const reset = document.querySelector('.reset');

// Board and cells
const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');

// Players
const playerX = 'X';
const playerO = 'O';

// Round number
const round = document.querySelector('.round-number')
let roundNumber = 0;

// Starting scores
const xScore = document.querySelector('.score-x');
const oScore = document.querySelector('.score-o');
let playerXScore = 0;
let playerOScore = 0;
let tieScore = 0;

// Starting player
let currentPlayer = 'x';

// Header neon blink
const neonBlink = document.querySelector('.neon-blink');
let neonAnimation = neonBlink.style.animation

// Win message
const winText = document.querySelector('.win-message');
let winAnimation = winText.style.animation

// Swap turn
const swapPlayer = () => {
    if (currentPlayer === 'x') {
        winText.textContent = "O's turn.";
        return currentPlayer = 'o';
    } else {
        winText.textContent = "X's turn.";
        return currentPlayer = 'x';
    }
}

// updateRound function. Add one after every endGame().
const updateRound = () => {
    roundNumber++
    return round.textContent = `${roundNumber}`
}

// updateScore function. Placed in isWin() below.
const updateScore = (winner) => {
    if (winner === 'x') {
        playerXScore++;
        return xScore.textContent = `${playerXScore}`;
    } else if (winner === 'o') {
        playerOScore++;
        return oScore.textContent = `${playerOScore}`;
    }
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

// Check win function. 
const checkWin = () => {
    // Loop through each of the winning conditions above.
    for (let condition of winningConditions) {
        let c0 = condition[0];
        let c1 = condition[1];
        let c2 = condition[2];
        let cell0 = cells[c0];
        let cell1 = cells[c1];
        let cell2 = cells[c2];

        // Condition if all winning conditions are X. If X meets winning conditions, +1 to playerX score, end game to announce that X won.
        if (cell0.classList.contains('x') && cell1.classList.contains('x') && cell2.classList.contains('x')) {
            updateScore('x');
            return endGame('Player X wins.');
        }
        // Condition if all winning conditions are O. If O meets winning conditions, +1 to playerO score, end game to announce that O won.
        else if (cell0.classList.contains('o') && cell1.classList.contains('o') && cell2.classList.contains('o')){
            updateScore('o');
            return endGame("Player O wins");
        }
    } 
    if (allContainsXO()) {
        return endGame("It's a tie!");
    }
}

const allContainsXO = () => {
    for (let cell of cells) {
        if (!cell.classList.contains('x') && !cell.classList.contains('o')){
          return false
        }
    }
    return true
}

// When cell is clicked, insert currentPlayer into selected cell, then swap turns. Use event.target.
const clickTarget = (event) => {
    const cell = event.target;
    // Insert current player's move
    const insertMove = (cell, currentPlayer) => {
        cell.classList.add(currentPlayer);
    }
    insertMove(cell, currentPlayer);
    swapPlayer();
    checkWin();
    console.log('cell clicked');
}

// End the game. 
const endGame = (msg) => {
    // Prevent further moves
    cells.forEach(cell => {
        cell.removeEventListener('click', clickTarget);
    })

    // Show the win message
    winText.style.opacity = 1;
    winText.textContent = msg;
}

// Start function
const start = () => {
    // Initiate click eventListener. Cannot click until PLAY button is clicked. Click event can only occur once per cell.
    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.addEventListener('click', clickTarget, {once: true});
    })
    updateRound();                          // Increase the round number.
    currentPlayer = 'x';                    // Reset current player to X.
    neonBlink.style.animation = 'none';     // Turn off header flicker animation every start.
    winText.style.animation = 'none';       // Stop the flashing message text animation
    winText.style.opacity = 1;              // Hide win message.
    winText.textContent = 'X to start.';    // Prompt player X to start.
    play.textContent = 'REPLAY';            // Change 'PLAY' to 'REPLAY'.
    play.style.width = '225px';             // Auto increase 'REPLAY' width.

    console.log('Board reset');
}

// Play/Replay button
play.addEventListener('click', start);

// Reset game function to reset page without refreshing page.
const resetGame = () => {
    currentPlayer = 'x';
    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.removeEventListener('click', clickTarget);
    })
    roundNumber = 0;                                    // Reset the JS round num.
    round.textContent = 0;                              // Reset the HTML round num.
    xScore.textContent = 0;                             // Reset Player X Score.
    oScore.textContent = 0;                             // Reset Player O Score.
    neonBlink.style.animation = 'flicker 1s infinite alternate';    // Turn header animation back on
    winText.style.animation = 'fade 5s infinite';       // Turn message animation back on.
    winText.textContent = 'PRESS PLAY TO START';        // Reset message.
    play.textContent = 'PLAY';                          // Reset replay button to play.
    play.style.width = '200px';                         // Reset play button border width.
}

// Reset button
reset.addEventListener('click', resetGame)