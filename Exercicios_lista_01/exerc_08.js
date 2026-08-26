import leitor from 'readline-sync';

let maior;
let valor1 = leitor.question("Digite valor 1: ");
let valor2 = leitor.question("Digite valor 2: ");

maior = valor1;

if (valor2 > valor1) {
    maior = valor2;
};

if (valor1 == valor2) {
    console.log("Números são iguais.")
};

console.log("O maior valor é: " + maior);