import leitor from 'readline-sync';

let valor;
let resultado = 0;

do {
    valor = leitor.question("Digite um valor: ");
    valor = Number(valor)
    resultado = resultado + valor
} while (valor != 0);

console.log(`O Resultado da soma é ${resultado}.`)