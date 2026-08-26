import leitor from 'readline-sync';

let valor = leitor.question("Digite um valor: ");
let i = 1;

valor = Number(valor);

while (i <= 10) {
    console.log(`${i} X ${valor} = ${i * valor}`);
    i++
}