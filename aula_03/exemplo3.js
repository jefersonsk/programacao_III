import leitor from 'readline-sync';

let texto = leitor.question("Digite um valor: ");

let valor = Number(texto);

let resultado = "";

// if (valor < 0) {
//     resultado = "é negativo";
// } else if (valor > 0) {
//     resultado = "é positivo";
// } else {
//     resultado = "é zero";
// }

resultado = valor < 0 ? "é negativo":(valor > 0 ? "é positivo":"é zero") ;

console.log(resultado) 
