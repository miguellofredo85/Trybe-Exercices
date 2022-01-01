// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventLink(event){
    event.preventDefault();
}
HREF_LINK.addEventListener('click', preventLink);

function preventCheck(event){
    event.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', preventCheck);

function preventText(event){
    event.preventDefault();
    const letter = event.key;
    if(letter === "a"){
        return INPUT_TEXT.value = letter;
    }
//     const character = event.key;
//   if (character !== 'a') {
//     event.preventDefault();
//   }
}
INPUT_TEXT.addEventListener('keypress', preventText);