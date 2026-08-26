import leitor from 'readline-sync';

let resultado;
let usuario = leitor.question("Digite usuario: ");
let senha = leitor.question("Digite senha: ");

if (usuario == "admin" && senha == "1234") {
    resultado = "Acesso Permitido.";
} else {
    resultado = "Acesso Negado.";
};

console.log(resultado)