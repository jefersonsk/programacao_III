import api from './CrudAPI.js';
import leitor from 'readline-sync';

let escolha = '';

function linha() {
    console.log('--------------------------------------');
}

function pausa() {
    leitor.question('Pressione qualquer tecla para continuar...')
}

async function menu () {
    while (escolha != '9') {
        console.log('MENU');
        linha();
        console.log('1 - Criar novo registro');
        console.log('2 - Listar todos os registros');
        console.log('3 - Buscar registro por ID');
        console.log('4 - Atualizar registro');
        console.log('5 - Excluir registro');
        console.log('6 - Tudo em Maiúscula');
        console.log('7 - Sobrenome primeiro');
        console.log('8 - Pesquisa por nome');
        console.log('9 - Sair');
        linha();

        escolha = leitor.question('Escolha sua opção: ')

        switch (escolha) {
            case "1":
                await criarRegistro();
                break;
            case "2":
                await listarTodos();
                break;
            case "3":
                await buscarPorId();
                break;
        }
    }
}

async function criarRegistro() {
    console.log('>>> Criar novo registro <<<');
    let novoNome = leitor.question('NOME: ');
    let novoEmail = leitor.question('E-MAIL: ');

    let novoContato = {nome: novoNome, email: novoEmail};

    await api.criar(novoContato);

    console.log('Novo contato cadastrado com sucesso!');
    pausa();
}

async function listarTodos() {
    console.log('>>> MOSTRAR TODOS OS CONTATOS <<<');

    let contatos = await api.lerTodos();

    contatos.forEach(contato => console.log(`ID: ${contato.id}: Nome: ${contato.nome} - E-mail: ${contato.email}`))

    linha();
    pausa();
}

async function buscarPorId() {
    let pesquisaId = '';

    pesquisaId = leitor.question('Digite o ID: ');
    pesquisaId = Number(pesquisaId);

    let resultadoPesquisa = await api.lerPorId(pesquisaId);

    if (resultadoPesquisa != undefined) {
        console.log(`ID: ${resultadoPesquisa.id} - NOME: ${resultadoPesquisa.nome} - E-MAIL: ${resultadoPesquisa.email}`);
    } else {
        console.log('ID não encontrada!');
    }

    pausa();
    

}

menu();