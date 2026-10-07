// Apaga todas as linhas deste arquivo.

import {useState} from 'react';

function Pergunta(props) { // Regra: Componentes tem a primeira letra em Maiúscula.
  let retornoDoUseState = useState("");
  // o useState retorna 1 array com 2 valores, o primeiro e o valor de memória e o segundo é uma função
  let resultado = retornoDoUseState[0];
  let funcaoQueMudaValorDoEstado = retornoDoUseState[1]

  function responder(respostaUsuario) {    
    if (props.resposta == respostaUsuario) {
      funcaoQueMudaValorDoEstado("✔️ Você acertou!");
    } else {
      funcaoQueMudaValorDoEstado("❌ Você errou!");
    }
  }

  return <div>
    {/* Regra: Ao mudar de contexto obrigatoriamente deve-se retornar um valor */}
    <h3>{props.texto}</h3> 
    {/* a função não está sendo chamada, mas sim referenciada */}
    <button onClick={()=>responder("verdadeiro")}>Verdadeiro</button> {/*Regra: o parametro deve ser em Camel Case*/}
    <button onClick={function() {
      responder("falso")
    }}>Falso</button>
    <p>{resultado}</p>

  </div>
} 

export default function App() {
  return <div> 
    <h1>Quiz</h1>
    <Pergunta texto="1 - 1KM tem exatamente 500 metros?" resposta="falso"/>
    <Pergunta texto="2 - Porto Alegre é a capital do RS?" resposta="verdadeiro" novoValor="teste"/>
    <Pergunta texto="3 - O céu é azul?" resposta="verdadeiro"/>
  </div>;
}