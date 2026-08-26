import leitor from 'readline-sync';

let numero = leitor.question("Digite um valor: ");

while (numero > -1) {
    console.log(numero);
    numero--
}