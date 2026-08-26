import leitor from 'readline-sync'

// faça uma função que receba uma lista (array) e retorne uma nova lista com os seus valores multiplicados por 2

let lista = [2, 4, 6, 5];

function mapeiaLista(lista, funcao) {
    let novaLista = [];

    for (let indice=0; indice < lista.length; indice++) {
        let novaVariavel = funcao(lista[indice]);
        novaLista.push(novaVariavel); // Push adiciona o elemento no final da lista
    }

    return novaLista;

}

function exercio_01 (lista) {
    function soma(elemento) {
        return elemento * 2;
    }
    let resultado = mapeiaLista(lista, soma);
    return resultado;
}

console.log(exercio_01(lista))

// Faça uma função que receba um alista (array) e retorne uma nova lista com os seus elementos dividos por 2

function exercicio_02 (lista) {
    return mapeiaLista(lista, function(val) {
        return val / 2;
    })
}

console.log(exercicio_02(lista));

// Faça uma função que receba um alista (array) e retorne uma nova lista com os seus elementos subtraidos a 2

function exercicio_03 (lista) {
    return mapeiaLista(lista, (elemento) => elemento -2);
}

console.log(exercicio_03(lista));

// Faça uma função que receba um alista (array) e retorne uma nova lista com os seus elementos somar 2

function exercicio_04(lista) {
    console.log(lista.length);
    let novaLista = lista.map(function(elemento) {
        return elemento + 2;
    });
    
    return novaLista // map é um método que recebe obrigatoriamente uma função, que deve ter um parametro é retornar um valor
}

let exercicio_06 = (lista) => lista.map(valor => valor + 5);

console.log(exercicio_04(lista))

console.log(exercicio_06(lista))