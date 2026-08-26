import leitor from 'readline-sync';

let valor = leitor.question("Digite um valor: ");
let resultado;

if (valor % 2 == 0) {
    resultado = "Par";
} else {
    resultado = "Ímpar";
}

console.log("O número é: " + resultado);