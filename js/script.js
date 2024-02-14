// function startGame(){
//     const firstPage = document.getElementById('first-page');
//     firstPage.classList.add('hidden')
//     // console.log(firstPage.classList)

//     const secondPage = document.getElementById('second-page');
//     secondPage.classList.remove('hidden')
// }

function addKeyboardPress(event) {
    const keyElementPressed = event.key;

    // exit game with 'Esc' button
    if(keyElementPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabet = document.getElementById("text-display");
    const alphabets = currentAlphabet.innerText;


    if (keyElementPressed === alphabets.toLocaleLowerCase()) {
        // console.log("matched")
        playGame();
        removeBackgroundColor(keyElementPressed);

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const updateScore = currentScore + 1;

        // currentScoreElement.innerText = updateScore;

        const currentScore = getTextValueById('current-score');
        const updateScore = currentScore + 1;

        setTextValueById('current-score', updateScore)

    }
    else {
        // console.log('not matched')
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const updateLife = currentLife - 1;

        // currentLifeElement.innerText = updateLife;

        const currentLife = getTextValueById('current-life');
        const updateLife = currentLife - 1;

        setTextValueById('current-life', updateLife)

        if (updateLife === 0) {
            gameOver();
        }

    }

}

// get keyboard input
document.addEventListener('keyup', addKeyboardPress)

// create random alphabets
function playGame() {
    const alphabet = getAlphabet();
    const currentAlphabet = document.getElementById("text-display");
    currentAlphabet.innerText = alphabet;

    setBackgroundColor(alphabet);
}

// Enter the game
function startGame() {
    // hide pages and show page
    hidePagesById('first-page');
    hidePagesById('third-page');
    showPagesById('second-page');

    // update life and score
    setTextValueById('current-life', 5);
    setTextValueById('current-score', 0);

    setTextValueById('last-score', 0)

    playGame();
}

// game over
function gameOver() {
    hidePagesById('second-page');
    showPagesById('third-page');

    const lastScore = getTextValueById('current-score');
    setTextValueById('last-score', lastScore);

    // remove last element background
    const lastElement = getElementTextById('text-display');
    removeBackgroundColor(lastElement);
}