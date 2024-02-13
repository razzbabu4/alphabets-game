// function startGame(){
//     const firstPage = document.getElementById('first-page');
//     firstPage.classList.add('hidden')
//     // console.log(firstPage.classList)

//     const secondPage = document.getElementById('second-page');
//     secondPage.classList.remove('hidden')
// }

function playGame(){
    const alphabet = getAlphabet();
    const textShow = document.getElementById("text-display");
    textShow.innerText = alphabet;
    // console.log(getAlphabet())

    setBackgroundColor(alphabet)

}

function startGame(){
    hidePagesById('first-page');
    showPagesById('second-page');

    playGame();
}