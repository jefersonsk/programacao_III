import CrudAPI from "./CrudAPI.js";

async function criaLista () { //async torna a função asyncrona
    let novoContato = {nome: "Jeferson", email: "jefo@silveira.com"};

    let promessaCriar = CrudAPI.criar(novoContato);

    console.log("Continua assincrono");

    let contatoBanco = await promessaCriar; // await só continua quando a promessa for resolvida
    // await só funciona quando está em um ambiente assincrono
    // funções são sincronas

    console.log("Agora só vai chegar aqui depois de sincronizar");
    console.log("Contato criado. id: " + contatoBanco.id);

    let clientes = await CrudAPI.lerTodos();

    clientes.forEach(cliente => console.log(cliente.nome))
    return "ok";
}

console.log("chamei a cria lista")
let retorno = criaLista();

console.log(retorno);

retorno.then(function(resultado) {
    console.log(resultado);
})