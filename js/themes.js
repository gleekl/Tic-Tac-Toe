
// Themes
const setTheme = (theme) => {
    document.documentElement.className = theme;
}

const root = document.querySelector(':root')
const sunset = document.querySelector('#sunset')
const rainbow = document.querySelector('#rainbow')
const winter = document.querySelector('#winter')
const space = document.querySelector('#space')

const sunsetTheme = () => {
    root.classList.remove('rainbow')
    root.classList.remove('winter')
    root.classList.remove('space')
    return root.classList.add('sunset')
}
const rainbowTheme = () => {
    root.classList.remove('sunset')
    root.classList.remove('winter')
    root.classList.remove('space')
    return root.classList.add('rainbow')
}
const winterTheme = () => {
    root.classList.remove('sunset')
    root.classList.remove('rainbow')
    root.classList.remove('space')
    return root.classList.add('winter')
}
const spaceTheme = () => {
    root.classList.remove('sunset')
    root.classList.remove('rainbow')
    root.classList.remove('winter')
    return root.classList.add('space')
}

sunset.addEventListener('click', sunsetTheme)
rainbow.addEventListener('click', rainbowTheme)
winter.addEventListener('click', winterTheme)
space.addEventListener('click', spaceTheme)
