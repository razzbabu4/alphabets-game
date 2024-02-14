// function startGame(){
//     const firstPage = document.getElementById('first-page');
//     firstPage.classList.add('hidden')
//     // console.log(firstPage.classList)

//     const secondPage = document.getElementById('second-page');
//     secondPage.classList.remove('hidden')
// }
function addKeyboardPress(event) {
    const keyElementPressed = event.key;

    const currentAlphabet = document.getElementById("text-display");
    const alphabets = currentAlphabet.innerText;


    if (keyElementPressed === alphabets.toLocaleLowerCase()) {
        console.log("matched")
        playGame();
        removeBackgroundColor(keyElementPressed);
    }
    else {
        console.log('not matched')
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
    hidePagesById('first-page');
    showPagesById('second-page');

    playGame();
}