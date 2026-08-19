import leitor from 'readline-sync';

let texto = leitor.question("Digite um numero: ");
console.log(texto);
let valor = Number(texto);

while(Number.isNaN(valor) || texto == "") {
    texto = leitor.question("Número invalido, tente novamente: ");
    valor = Number(texto);
}

// if (valor < 0) {
//     valor *= -1
// }

valor = valor < 0 ? valor * -1:valor; 
// expressão ternário: desvantagem é que sempre tem que retornar um valor
// Primeira parte teste; ? é como se fossse o if; logo após interrogação ele faz se o resultado do teste for true, depois dos : se for falso


console.log("Saiu do looping");
let resultado = valor * 2;

console.log(resultado);