import leitor from 'readline-sync';

let valor1 = leitor.question("Digite 1º valor: ");
let valor2 = leitor.question("Digite 2º valor: ");
let operacao = leitor.question("Digite a operaçã (+, -, *, /): ");
let resultado;

if (operacao == "+") {
    resultado = valor1 + valor2;
} else if (operacao == "-") {
    resultado = valor1 - valor2;
} else if (operacao == "*") {
    resultado = valor1 * valor2;
} else {
    resultado = valor1 / valor2;
}

console.log("O resultado da conta é: " + resultado)