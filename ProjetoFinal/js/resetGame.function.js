/** Adds event listener to reseting the game by reloading the page */
export function resetGame() {
    let resetGameButton = document.getElementById('reset');
    resetGameButton.addEventListener('click', () => {
        window.location.reload();
    });
}