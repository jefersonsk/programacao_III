import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import API from './CrudAPI.js';

const leitor = readline.createInterface({input, output});
let escolha_opcao = 0;

async function listarConsultas() {
    let consultas = await API.lerTodos();
    consultas.forEach(consulta => console.log(`ID: ${consulta.id} - Nome: ${consulta.paciente} - Idade: ${consulta.idade} - ID_Especialidade: ${consulta.id_especialidade}`));
}

async function buscarPorID() {
    let pesquisa_id = await leitor.question('Digite ID: ');
    pesquisa_id = Number(pesquisa_id);

    let consulta = await API.lerPorId(pesquisa_id);
    let especialidades = await API.listaEspecialidades();

    if (consulta) {
        let especialidade = especialidades.find((item) => item.id === consulta.id_especialidade);
        console.log(`ID: ${consulta.id} - Nome: ${consulta.nome} - Idade: ${consulta.idade} - Especialidade: ${especialidade.nome}`);
    } else {
        console.log('Consulta não encontrada!')
    }
}

async function buscarConsultasCompletas() {
    let consultas = await API.lerTodos();
    let especialidades = await API.listaEspecialidades();

    let consultasCompletas = consultas.map((consulta) => {
        const especialidade = especialidades.find(item => consulta.id_especialidade === item.id);
        
        return {
            id: consulta.id,
            paciente: consulta.paciente,
            idade: consulta.idade,
            especialidade: especialidade ? especialidade.nome : 'Não Encontrado'
        };
    })

    consultasCompletas.forEach(consulta => console.log(`ID: ${consulta.id} - Nome: ${consulta.paciente} - Idade: ${consulta.idade} - Especialidade: ${consulta.especialidade}`));
}

async function buscarNomeEspecialidade() {
    let especialidades = await API.listaEspecialidades();
    let consultas = await API.lerTodos();

    console.log('>>> Lista de Especialidades <<<');
    especialidades.forEach(especialidade => console.log(`Nome Especialidade: ${especialidade.nome}`));

    let escolha = await leitor.question('Digite a Especialidade desejada: ');

    let especialidade = especialidades.find(item => item.nome.toUpperCase() == escolha.toUpperCase());

    if (!especialidade) {
        console.log('Especialidade não encontrada!')
    } else {

        let especialidadeEscolhida = consultas.filter(consulta => consulta.id_especialidade === especialidade.id);

        especialidadeEscolhida.forEach(consulta => console.log(`ID: ${consulta.id} - Nome: ${consulta.paciente} - Idade: ${consulta.idade} - ID_Especialidade: ${consulta.id_especialidade}`));
    }
};

async function buscarPeloNomePaciente() {
    let consultas = await API.lerTodos();

    let nomePaciente = await leitor.question('Digite nome do paciente: ');

    let pacienteEncontrado = consultas.filter(consulta => consulta.paciente.startsWith(nomePaciente));

    console.log(pacienteEncontrado);
};

async function buscarMenoresIdade() {
    let consultas = await API.lerTodos();
    let menoresIdade = consultas.filter((item) => item.idade < 18)
    menoresIdade.forEach(menores => console.log(`Nome: ${menores.paciente} - Idade: ${menores.idade}`));
};

async function buscarProblemas() {
    let consultas = await API.lerTodos();
    let consultaProblemas = consultas.filter((item) => item.id_especialidade === 101 && item.idade > 18 || item.id_especialidade == 105 && item.idade < 60);
    consultaProblemas.forEach(problema => console.log(`ID: ${problema.id} - Nome: ${problema.paciente} - Idade: ${problema.idade} - ID_Especialidade: ${problema.id_especialidade}`))
}

while (escolha_opcao != 9) {
    console.log('>>> MENU DE OPÇÕES <<<');
    console.log('1 - Criar nova consulta');
    console.log('2 - Listar todas as consultas');
    console.log('3 - Buscar consulta por ID');
    console.log('4 - Buscar pelo nome do paciente');
    console.log('5 - Buscar consulta por especialidade');
    console.log('6 - Listar todas as consultas (Com nome das Especialidades)');
    console.log('7 - Menores de idade');
    console.log('8 - Registros com problemas');
    console.log('9 - Sair');

    escolha_opcao = await leitor.question('Digite a opção: ');
    escolha_opcao = Number(escolha_opcao);

    switch (escolha_opcao) {
        case 1:
            break;
        case 2:
            await listarConsultas();
            break;
        case 3:
            await buscarPorID();
            break;
        case 4:
            await buscarPeloNomePaciente();
            break;
        case 5:
            await buscarNomeEspecialidade();
            break;
        case 6:
            await buscarConsultasCompletas();
            break;
        case 7:
            await buscarMenoresIdade();
            break;
        case 8:
            await buscarProblemas();
            break;
        case 9:
            console.log('>>> PROGRAMA ENCERRADO <<<');
            break;
    }
}

leitor.close();