import leitor from 'readline-sync';

function teste() {
    console.log("Chamei a função"); //parametrizamos uma função para generalizar
}

teste();

function teste2(a) {
    console.log(a+2);
}

teste2(4);

function teste3(a,b) {
    console.log(a + b);
}

teste3(4,3);