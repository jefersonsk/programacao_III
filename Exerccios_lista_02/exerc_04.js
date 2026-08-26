import leitor from 'readline-sync';

let senha = 998877;
let contador = 3;
let tentativa;
let resultado = "";

while (contador != 0) {
    tentativa = leitor.question("Digite a senha: ");

    if (tentativa == senha) {
        contador = 0;
        resultado = "Acesso Permitido.";
    } else {
        contador--
        console.log(`Senha Incorreta! Você tem mais ${contador} tentativas.`);
    }
}

if (contador == 0 && resultado == "") {
    console.log("Acesso Bloqueado!");
} else {
    console.log(resultado)
}