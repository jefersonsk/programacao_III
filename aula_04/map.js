let lista = [2, 4, 7, 5];

console.log(lista.map(valor => "texto: " + valor));
console.log(lista.map(valor => [valor, valor +2 , valor + 3]));
console.log(lista.map(valor => 0))
console.log(lista.map(valor => (
    {valor:valor,
    negativo: valor * -1,
    vezes100: valor * 100
}) ))

let pessoas = [
    {nome:"Jeferson", email: "jefo@silveira.com"},
    {nome:"Edna", email: "edna@rego.com"},
    {nome: "Pipe", email: "pipe@gamer.com"}
];

console.log(pessoas.map(pessoas => pessoas.nome));
console.log(pessoas.map(pessoas => pessoas.nome + ' - ' + pessoas.email))