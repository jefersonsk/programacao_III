import leitor from 'readline-sync';

let media;
let resultado;
let nota1 = leitor.question("Digite N1: ");
let nota2 = leitor.question("Digite N2: ");

nota1 = Number(nota1);
nota2 = Number(nota2);

media = (nota1 + nota2) / 2;

if (media >= 7 ) {
    resultado = "Aprovado";
} else {
    resultado = "Reprovado";
}

console.log("O aluno está " + resultado + " com média " + media + ".");