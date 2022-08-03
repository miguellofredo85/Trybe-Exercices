const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', path: './imc.js' },
  { name: 'Calcular velocidade média', path: './carro.js' },
  { name: 'Jogo de adivinhação', path: './jogo.js' },
];

function escolherScript() {
  // Iteramos sobre os scripts para criar a lista numerada
  const enunciado = 'Escolha um numero para executar o script correspondente\n';
  const mensagem = scripts
    .reduce((message, script, index) => `${message}${index + 1} - ${script.name}\n`, enunciado);

  const numeroEscolhido = readline.questionInt(mensagem) - 1;

  const script = scripts[numeroEscolhido];

  return script;
}

function main() {
  const script = escolherScript();

  if (!script) return console.log('Número inválido. Saindo');
  require(script.path);
}

main();