import { useState } from "react";

// Componente FraseIdioma
function FraseIdioma({ textoPortugues, textoIngles, idiomaAtual }) {
  return idiomaAtual === "pt" ? textoPortugues : textoIngles;
}

// Exemplo de como testar na sua tela principal (App)
export default function App() {
    const [escolhaIdioma, setEscolhaIdioma] = useState("pt");
    const listaIdiomas = [
        {nome: "Português", sigla: "pt"},
        {nome: "Inglês", sigla: "en"},
        {nome: "Espanhol", sigla: "es"}
    ];

    return (
    <div>
        <FraseIdioma
        textoPortugues="Bem-vindo ao sistema"
        textoIngles="Welcome to the system"
        idiomaAtual={escolhaIdioma}

        />
        <br/>
        {listaIdiomas.map(function(elemento) {
            return (
                <label key={elemento.sigla}>
                    <input 
                        type="radio" 
                        name="escolha" 
                        onChange={() => setEscolhaIdioma(elemento.sigla)} 
                        checked={escolhaIdioma === elemento.sigla}/>{elemento.nome}
                </label>
            )
        })};
    </div>
    );
}