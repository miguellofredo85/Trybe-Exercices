const inputEmail = document.querySelector('#in-email');
const inputPass = document.querySelector('#input-password');
const btnEntrar = document.querySelector('#btn-entrar');
const checkAcordos = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');
const divContainer = document.querySelector('.container');
const form = document.querySelector('#evaluation-form');
const nome = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelectorAll('.family');
const subject = document.querySelectorAll('.subject');
const puntuacao = document.querySelectorAll('.puntuacao');

const alertEnter = (e) => {
  e.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputPass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};
btnEntrar.addEventListener('click', alertEnter);

checkAcordos.addEventListener('click', () => {
  if (checkAcordos.checked) {
    btnSubmit.removeAttribute('disabled');
  }
});

textarea.addEventListener('input', () => {
  const caracteres = textarea.value.length;
  const decrescent = 500 - caracteres;
  counter.innerText = decrescent;
});

const checkFamily = () => {
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      return family[i].value;
    }
  }
};

const checkPuntuacao = () => {
  for (let i = 0; i < puntuacao.length; i += 1) {
    if (puntuacao[i].checked) {
      return puntuacao[i].value;
    }
  }
};

const checkProgram = () => {
  const programa = [];
  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked) {
      programa.push(subject[i].value);
    }
  }
  return programa.join(', ');
};

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const paragraph = document.createElement('p');
  form.appendChild(paragraph);
  paragraph.innerText = `Nome: ${nome.value} ${lastName.value}
  Email: ${email.value}
  Casa: ${house.value}
  Família: ${checkFamily()}
  Matérias: ${checkProgram()}
  Avaliação: ${checkPuntuacao()}
  Observações: ${textarea.value}`;
  divContainer.style.display = 'none';
});
