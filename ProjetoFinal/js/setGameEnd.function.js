import { setMaxScore } from "./setGameRecords.function.js";

/**
 * Check if the game is over and:
 * a) invokes {@link handleButtons()}, both if guessed or not the word.
 * b) invokes {@link setMaxScore()}, if has guessed the word;
 * @param {number} attempts - The number of attempts
 */
export function setGameEnd(attempts) {
    if (document.querySelectorAll('.letter.hidden').length === 0) {
        handleButtons()

        let maxScore = setMaxScore(attempts)
        document.getElementById('max-score').innerText = maxScore;

        let winAlert = document.getElementById('won');
        winAlert.classList.remove('hidden');
    }

    if (attempts < 1) {
        handleButtons()

        let winAlert = document.getElementById('lose');
        winAlert.classList.remove('hidden');        
    }
}

/**
 * Disable the letter buttons and enable the reset button
 */
function handleButtons() {
    document.querySelectorAll('.letter-button').forEach(
        button => {
            button.disabled = true
            button.classList.add('btn-outline-primary');
            button.classList.remove('btn-primary');
        }
    );
    
    let resetButton = document.getElementById('reset');
    resetButton.disabled = false;
    resetButton.classList.remove('btn-outline-primary');
    resetButton.classList.add('btn-primary');

}