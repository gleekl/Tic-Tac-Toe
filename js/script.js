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

const play = document.querySelector('.play')
const replay = document.querySelector('.replay')

const cellBox = document.querySelectorAll('.cell')
const topLeft = document.querySelector('#top-left')
const topMid = document.querySelector('#top-mid')
const topright = document.querySelector('#top-right')
const midLeft = document.querySelector('#mid-left')
const midMid = document.querySelector('#mid-mid')
const midRight = document.querySelector('#mid-right')
const btmLeft = document.querySelector('#btm-left')
const btmMid = document.querySelector('#btm-mid')
const btmRight = document.querySelector('#btm-right')

const xClass = 'X';
const oClass = 'O';

const currentClass = () => {
    if (oTurn === true) {
        return oClass;
    } else {
        return xClass;
    }
}

const clickTarget = (event) => {
    const cell = event.target
    
}

cellBox.forEach(cell => {
    cell.addEventListener('click', )
})

const test = () => {
    alert("Play button works");
}

const makeX = () => {
    topMid.class
    return topMid.textContent = 'X';
}

const makeO = () => {
    return topLeft.textContent = 'O'
}

topMid.addEventListener('click', makeX)
topLeft.addEventListener('click', makeO)
topMid.addEventListener('click', makeMove)
topright.addEventListener('click', makeMove)

// play.addEventListener('click', redirect())