const select = document.querySelector('#select-estados');
let cpf = document.querySelector('#cpf');
const form = document.querySelector('#formulario');


// let cpfValidate = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;

function createStates(){
    let estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',]
    for(let i of estados){
        let opcao = document.createElement('option');
        opcao.innerText = i;
        select.append(opcao);
        opcao.setAttribute('value', i)
    }
}
createStates()

function stopDefault(){
    form.preventDefault()
}
stopDefault()