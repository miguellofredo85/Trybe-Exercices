const select = document.querySelector('#select-estados');
const cpf = document.querySelector('#cpf');
const form = document.querySelector('#formulario');
const btnEnviar = document.querySelector('#enviar');
const btnLimpar = document.querySelector('#limpar')
const inputs = document.querySelectorAll('input');
const text = document.querySelectorAll('textarea')

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

function stopDefault(event){
    event.preventDefault()
    btns()
}
btnEnviar.addEventListener('click', stopDefault);

function btns(){
    for (let i = 0; i < inputs.length; i +=1){
        if(!inputs[i].value){
        alert(`Preencher ${inputs[i].name}`)
      }
    }
  }
btnLimpar.addEventListener('click', function limparForm(){
    inputs.value = "";
    text.value = "";
})
