import leitor from 'readline-sync';

let senha = 998877;
let contador = 3;
let tentativa;
let acessoPermitido = false;

while (contador != 0) {
    tentativa = leitor.question("Digite a senha: ");

    if (tentativa === senha) {
        acessoPermitido = true;
        break;
    } else {
        contador--
        console.log(`Senha Incorreta! Você tem mais ${contador} tentativas.`);
    }
}

if (acessoPermitido) {
    console.log("Acesso Liberado!");
} else {
    console.log("Acesso Negado!")
}