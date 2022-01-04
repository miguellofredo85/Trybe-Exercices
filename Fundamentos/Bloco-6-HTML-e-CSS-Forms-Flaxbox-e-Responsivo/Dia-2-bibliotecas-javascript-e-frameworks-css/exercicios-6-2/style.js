const select = document.querySelector('#select-estados');
const cpf = document.querySelector('#cpf');
const form = document.querySelector('#formulario');
const btnEnviar = document.querySelector('#enviar');
const btnLimpar = document.querySelector('#limpar')
const inputs = document.querySelectorAll('input');
const text = document.querySelectorAll('textarea')





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
    btns();
    // consolidado();

}
// function consolidado(){
//     form.style.display = 'none';
    
//     let container = document.querySelector('.contenedor')
//     for(let i = 0; i < container.length; i+=1){let div = document.createElement('div');
//     div.className = 'contenedor';
//     let titulo = document.querySelector('#title');
//     titulo.appendChild(div);
//         let acrecenta = 0;
//         let paragraph = document.createElement('p');
//         paragraph.innerText = document.getElementsByTagName('input')[acrecenta].value
//         acrecenta+1
//     }
// }
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

