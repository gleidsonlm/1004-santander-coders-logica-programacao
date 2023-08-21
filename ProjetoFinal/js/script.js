import { createGame } from './createGame.function.js';

let isGameRunning = false;
window.addEventListener('load', () => {
    if (!isGameRunning) {
        try {
            isGameRunning = createGame()   
        } catch (error) {
            console.error(error);
        };
    }
});

let resetGameButton = document.getElementById('reset');
resetGameButton.addEventListener('click', () => {
    window.location.reload();
});

/* Toogle Color Mode */
let colorModeButton = document.getElementById('bd-theme');
colorModeButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-bs-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    let forcaStroke = document.getElementById('forca');
    if (theme === 'dark') { 
        forcaStroke.classList.add('stroke-night')
        forcaStroke.classList.remove('stroke-day')
    } else {
        forcaStroke.classList.remove('stroke-night')
        forcaStroke.classList.add('stroke-day')
    }
});