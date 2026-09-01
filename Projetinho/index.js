import CrudAPI from "./CrudAPI.js";

let promessa = CrudAPI.lerTodos();
promessa.then(function(retornoDaPromessa) {  // then tem que esperar para poder executar
    console.log("Retorno da Promessa");
    retornoDaPromessa.forEach(contato => console.log(contato.nome));
})

console.log("Contatos: ");
console.log(promessa);
console.log("Código executando")

