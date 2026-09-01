import CrudAPI from "./CrudAPI.js";

let novoContato = {nome: "Jeferson", email: "jefo@silveira.com"};

let promessa = CrudAPI.criar(novoContato);

promessa.then(function(contatoBanco) {
    console.log("Novo Registro Criado. id: " + contatoBanco.id);

    let promessaLista = CrudAPI.lerTodos();

    promessaLista.then(function(contatos) {
        console.log("Lista contatos: ");
        contatos.forEach(contato => {
            console.log(contato.id + " " + contato.nome)
        })
    });
});

