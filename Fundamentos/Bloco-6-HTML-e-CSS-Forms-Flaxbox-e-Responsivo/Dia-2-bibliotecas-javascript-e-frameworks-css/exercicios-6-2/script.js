const select = document.querySelector('#select-estados');
const cpf = document.querySelector('#cpf');
const form = document.querySelector('#formulario');
const btnEnviar = document.querySelector('#enviar');
const btnLimpar = document.querySelector('#limpar')
const inputs = document.querySelectorAll('input');
const text = document.querySelectorAll('textarea')



document.getElementById('data').DatePickerX.init();

function createStates(){
    let estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',]
    for(let i of estados){
        let opcao = document.createElement('option');
        opcao.innerText = i;
        select.appendChild(opcao);
        opcao.setAttribute('value', i)
    }
}
createStates()

function stopDefault(event){
    event.preventDefault()
    btns();
}

btnEnviar.addEventListener('click', stopDefault);

btnLimpar.addEventListener('click', function limparForm(){
    inputs.value = "";
    text.value = "";
})




