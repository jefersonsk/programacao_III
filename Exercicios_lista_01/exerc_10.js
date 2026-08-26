import leitor from 'readline-sync';

let secreto = 7;
let valor = leitor.question("Adivinhe o valor que pensei: ");

let resultado = valor == secreto ? "Acertou!!" : "Errou :( ."

console.log(resultado)