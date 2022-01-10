const abilities = ['terminal linux', ' git', ' HTML', ' CSS', ' JS'];
let twoPhrases = word => {
let phraseOne = `Tryber ${word} aqui!`;
let newArr = abilities.sort().toString()
return `${phraseOne} Minhas cinco habilidades sao: ${newArr}, #goTrybe`
    }
console.log(twoPhrases('Miguel'))

// const abilities = [' terminal linux', ' git', ' HTML', ' CSS', ' JS'];

// let phraseOne = word => `Tryber ${word} aqui!`;

// function phraseTwo(){ 
//     let newArr = abilities.sort().toString()
//     return `${phraseOne('Miguel')} Minhas cinco habilidades sao: ${newArr}`
//     }
// console.log(phraseTwo())