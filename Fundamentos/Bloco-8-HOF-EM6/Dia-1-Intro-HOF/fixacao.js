// Ao chamar a função doingThings:
const wakeUp = () => 'Acorda Mano';
const breackfast = () => 'Bora tomar cafe!!';
const goToSleep = () => 'Partiu dormir!!';

const doingThings = (todo) => console.log(todo());

doingThings(goToSleep); 
doingThings(breackfast);
doingThings(wakeUp);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!