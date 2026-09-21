import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import API from './CrudAPI.js';

const leitor = readline.createInterface({input, output});

// const nome = await leitor.question('Digite o nome: ');
// console.log(nome);
// const email = await leitor.question('Digite o email: ');
// console.log(email);
// leitor.close(); // Equanto não colocar essa linha o programa não encerra

async function criarRegistro() {
    // Nome não pode ser vazio
    // E-mail tem que ter @
    let nome = await leitor.question('Digite o nome: ');
    if (!nome) {
        console.log('Nome não pode ser vazio!');
    } else {
        let email = await leitor.question('Digite o e-mail: ');
        if (!email.includes('@')) {
            console.log('E-mail inválido!');
        } else {
            let contato = {nome: nome, email: email};
            let contatoCriado = await CrudAPI.criar(contato);
            console.log(`ID: ${contatoCriado.id} - Nome: ${contatoCriado.nome} - E-mail: ${contatoCriado.email}`);
        }
    }
}

async function listarTodos () {
    let contatos = await API.lerTodos();
    contatos.forEach(contato => console.log(`ID: ${contato.id} - Nome: ${contato.nome} - E-mail: ${contato.email}`))
    console.log('=======================================')
}

async function buscarPorID() {
    let solicitaID = await leitor.question('Digite o ID: ');
    solicitaID = Number(solicitaID);
    let contato = await API.lerPorId(solicitaID);
    if (contato) {
        console.log(`ID: ${contato.id} - Nome: ${contato.nome} - E-mail: ${contato.email}`);
    } else {
        console.log('Contato não localizado!');
    }
    
}

let escolha_opcao = 0;

while (escolha_opcao != 9) {
    console.log(">>> MENU DE OPÇÕES <<<");
    console.log("1 - Criar novo registro");
    console.log('2 - Listar todos os registros');
    console.log('3 - Buscar registro por ID');
    console.log('9 - Sair');

    escolha_opcao = await leitor.question('Digite a opção: ');
    escolha_opcao = Number(escolha_opcao);

    switch (escolha_opcao) {
        case 1:
            console.log('>>> CRIAR NOVO REGISTRO');
            await criarRegistro();
            break;
        case 2:
            console.log('>>> LISTAR TODOS OS REGISTROS <<<');
            await listarTodos();
            break;
        case 3:
            console.log('>>> BUSCAR REGISTRO POR ID <<<')
            await buscarPorID();
            break;
        case 9:
            console.log('>>> PROGRAMA SENDO ENCERRADO! <<<')
            break;
        default:
            console.log('OPÇÃO INVÁLIDA!')
    }
}

leitor.close();