let produtos = [
    {
        nome: "TV",
        valor: 2000,
        tipo: "eletro",
    },
    {    
        nome: "Abacate",
        valor: 4,
        tipo: "fruta"
    },
    {
        nome: "Batedeira",
        valor: 200,
        tipo: "eletro"
    },
    {
        nome: "Manga",
        valor: 5,
        tipo: "fruta",
    },
    {
        nome: "Sabão",
        valor: 2,
        tipo: "limpeza"
    }
]

let total = produtos.reduce(function(acumulador, produto) {
    return acumulador + produto.valor
}, 0);

console.log(total);

console.log("Eletros");
console.log(produtos.filter(produto => produto.tipo == "eletro"));

let totalEletro = produtos
            .filter(produto => produto.tipo == "eletro")
            .reduce((acumulador, produto) => acumulador + produto.valor, 0);

console.log(totalEletro);

console.log("Sort - Ordenação")

console.log("Ordem Crescente") // Para ser descrescente, inverter a ordem dos produtos no return
console.log(produtos.sort(function(produtoA, produtoB) { // Ordem dos parâmetros importa
    return produtoA.valor - produtoB.valor
}));