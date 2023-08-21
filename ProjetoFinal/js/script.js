import { createGame } from './createGame.function.js';
import { resetGame } from './resetGame.function.js';
import { setColorMode } from './setColorMode.function.js';

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

resetGame();

setColorMode();