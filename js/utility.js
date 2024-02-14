function hidePagesById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}
function showPagesById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getAlphabet() {
    const alphabets = "abcdefghijklmnopqrstwxyz"
    const arrayAlphabet = alphabets.split(''); // It's now like an array
    const index = Math.round(Math.random() * 25);
    const alphabet = arrayAlphabet[index];
    return alphabet;
}

function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}

function getTextValueById(elementId) {
    const element = document.getElementById(elementId);
    const updateElement = element.innerText;
    const getValue = parseInt(updateElement);
    return getValue;
}

function setTextValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;

}


function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const lastElement = element.innerText;
    return lastElement;
}


