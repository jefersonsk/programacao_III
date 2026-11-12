import Tabela from "./Tabela";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import DialogFormulario from "./DialogFormulario";

export default function GestaoContatos() {
    const [exibirCadastroContato, setExibirCadastroContato] = useState(false);
    const [contatos, setContatos] = useState([]);
    
    async function buscarContatos() {
        let retorno = await axios.get("http://localhost:3000/contatos");

        setContatos(retorno.data);

    }

    useEffect(() => {
        buscarContatos();
    }, []);

    async function enviar(novoContato) {
        let retorno = await axios.post("http://localhost:3000/contatos", novoContato);
        setExibirCadastroContato(false)
        buscarContatos();
    };

    return <>
        <button onClick={() => setExibirCadastroContato(true)}>Cadastrar novo Contato</button>
        {exibirCadastroContato &&
            <DialogFormulario 
                onEnviar={enviar} 
                onFechar={() => setExibirCadastroContato(false)}
                 />}
        <Tabela contatos={contatos}/>
    </>
};