function teste() {
    console.log("Teste!");
}

let teste2 = teste; //ambas estão apontando para o mesmo bloco de código

teste2();

function testeA(a) {
    a();
    a();
    a();
}

testeA(teste);