let lista = [5, 8, 9, 10];

let retorno = lista.map(function(elemento, indice, proprialista){
    // método map só funciona sobre arrays
    return "Novo valor do elemento: " + elemento + "na posição: " + indice
});

console.log(retorno)

// forEach não retorna nenhum valor
lista.forEach(function(elemento, indice, todalista) {
    console.log("Elemento: " + indice);
    console.log("Índice: " + indice);
    console.log("Nova lista: " + todalista);
});

let total = 0;

lista.forEach(function(elemento) {
    total += elemento;
})

console.log("Total: " + total)

let lista02 = [2, 5, -6, -4, 8, 31, -2, -4, -1];

let positivos = lista02.filter(function(valor) {
    if(valor > 0) {
        return true;
    } else {
        return false;
    }
});

console.log(lista02);
console.log(positivos);

// filter recebe uma função e retorna um array, a função programada deve retornar sempre booleanos
lista02.filter(function(valor) {
    return valor > 0 ? true:false;
});

lista02.filter(valor => valor > 0 ? true:false);

lista02.filter(valor => valor > 0);

console.log(lista02.filter(a => a < 0));

// find retorna o primeiro elemento que ele encontra que satisfaça a condição
console.log(lista02.find(a => a > 0));
console.log(lista02.find(a => a < 0));

// some retorna true se ele encontra pelo menos 1 verdadeiro no array
console.log(lista02.some(a => a > 0));
console.log(lista02.some(a => a == 0));

// every retorna true se ele encontra todos os elementos forem verdadeiros no array
console.log(lista02.every(a => a > 0));
console.log(lista02.every(a => a != 0));

console.log(lista02([].every(a => a < 0))); // Retorna verdadeiro

// reduce tem 2 parametros a mais, acumulador o o ínicio do acumulador
console.log("Reduce");
let resultado = lista.reduce(function(acumulador, elemento, indice, array) {
    return acumulador + elemento;
}, 0);

console.log(resultado);

console.log(lista.reduce((acumulador, valor) => acumulador * valor, 0));