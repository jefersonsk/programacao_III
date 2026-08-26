import leitor from 'readline-sync';

let idade = leitor.question("Digite sua idade: ");
let resultado

if (idade >= 18) {
    resultado = "Maior";
} else {
    resultado = "Menor";
}

console.log("Você é " + resultado + " de idade.");