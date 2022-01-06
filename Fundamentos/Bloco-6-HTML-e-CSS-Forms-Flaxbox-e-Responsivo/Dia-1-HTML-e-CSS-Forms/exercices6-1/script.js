const select = document.querySelector('#select-estados');
const cpf = document.querySelector('#cpf');
const form = document.querySelector('#formulario');
const btnEnviar = document.querySelector('#enviar');
const btnLimpar = document.querySelector('#limpar')
const inputs = document.querySelectorAll('input');
const text = document.querySelectorAll('textarea')
const container = document.querySelector('#container');


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

function nome(){
    let name = document.querySelector('#name');
    if(name.value){
        let paragraph = document.createElement('p');
        paragraph.className = 'nome'
        container.appendChild(paragraph);
        paragraph.innerText = `Nome: ${name.value}`
    }
}

function email(){
    let email = document.querySelector('#email');
    if(email.value){
        let paragraph = document.createElement('p');
        paragraph.className = 'email'
        container.appendChild(paragraph);
        paragraph.innerText = `Email: ${email.value}`
    }
}

function endereco(){
    let endereco = document.querySelector('#endereco');
    if(endereco.value){
        let paragraph = document.createElement('p');
        paragraph.className = 'endereco'
        container.appendChild(paragraph);
        paragraph.innerText = `Endereco: ${endereco.value}`
    }
}

function cpfs(){
    let cpf = document.querySelector('#cpf');
    if(cpf.value){
        let paragraph = document.createElement('p');
        paragraph.className = 'cpf'
        container.appendChild(paragraph);
        paragraph.innerText = `CPF: ${cpf.value}`
    }
}

function cidade(){
    let cidade = document.querySelector('#cidade');
    if(cidade.value){
        let paragraph = document.createElement('p');
        paragraph.className = 'cidade'
        container.appendChild(paragraph);
        paragraph.innerText = `Cidade: ${cidade.value}`
    }
}

function estado(){
    if(select.value){
        let paragraph = document.createElement('p');
        paragraph.className = 'select'
        container.appendChild(paragraph);
        paragraph.innerText = `Estado: ${select.value}`
    }
}
function house(){
    const moradia = document.querySelectorAll('.moradia');
    for(let i = 0; i < moradia.length; i += 1){
        if (moradia[i].checked){
        let paragraph = document.createElement('p');
        container.appendChild(paragraph);
        paragraph.innerText = `${moradia[i].value}`
        }
    }
}
function trabalho(){
    let trabalho = document.querySelector('#trabalho');
    if(trabalho.value){
        let paragraph = document.createElement('p');
        paragraph.className = 'trabalho'
        container.appendChild(paragraph);
        paragraph.innerText = `Resumo do curriculo : ${trabalho.value}`
    }
}

function cargo(){
    let cargo = document.querySelector('#cargo');
    if(cargo.value){
        let paragraph = document.createElement('p');
        paragraph.className = 'cargo'
        container.appendChild(paragraph);
        paragraph.innerText = `Cargo : ${cargo.value}`
    }
}

function descricao(){
    let descricao = document.querySelector('#descricao');
    if(descricao.value){
        let paragraph = document.createElement('p');
        paragraph.className = 'descricao'
        container.appendChild(paragraph);
        paragraph.innerText = `Descricao de cargo : ${descricao.value}`
    }
}

function data(){
    let data = document.querySelector('#data');
    if(data.value){
        let paragraph = document.createElement('p');
        paragraph.className = 'data'
        container.appendChild(paragraph);
        paragraph.innerText = `Data de Inicio no cargo : ${data.value}`
    }
}

function btnSend(){
    nome();
    email();
    cpfs();
    endereco();
    cidade();
    estado();
    house();
    trabalho();
    cargo();
    descricao();
    data();
    btns();
}

function stopDefault(event){
    event.preventDefault();
    btnSend();
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