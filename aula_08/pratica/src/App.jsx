// Apaga todas as linhas deste arquivo.

import {useState} from 'react';
import listaPerguntas from './listaPerguntas';
import sim_png from './assets/sim.png';
import nao_png from './assets/nao.png';
import acertou_img from './assets/acertou.png';
import errou_img from './assets/errou.png';

function Pergunta(props) { // Regra: Componentes tem a primeira letra em Maiúscula.
  // let retornoDoUseState = useState("");
  // // o useState retorna 1 array com 2 valores, o primeiro e o valor de memória e o segundo é uma função
  // let resultado = retornoDoUseState[0];
  // let funcaoQueMudaValorDoEstado = retornoDoUseState[1]

  // function responder(respostaUsuario) {    
  //   if (props.resposta == respostaUsuario) {
  //     funcaoQueMudaValorDoEstado("✔️ Você acertou!");
  //   } else {
  //     funcaoQueMudaValorDoEstado("❌ Você errou!");
  //   }
  // }

  const [respostaDoUsuario, setRespostaDoUsuario] = useState(null);

  function responder(informacaoBotao) {
    let novaRespostaDoUsuario = informacaoBotao;

    if(novaRespostaDoUsuario == props.resposta) {
      props.onResponder(true)
    } else {
      props.onResponder(false)
    }

    setRespostaDoUsuario(novaRespostaDoUsuario);
  }

  // let resultado = "";

  // if(respostaDoUsuario) {
  //   if(props.resposta == respostaDoUsuario) {
  //     resultado = acertou_img
  //   } else {
  //     resultado = errou_img
  //   }
  // }

  return <div>
    {/* Regra: Ao mudar de contexto obrigatoriamente deve-se retornar um valor */}
    <h3>{props.texto}</h3> 
    {/* a função não está sendo chamada, mas sim referenciada */}
    <button disabled={respostaDoUsuario!=null} onClick={()=>responder("verdadeiro")}><img src={sim_png}/></button> {/*Regra: o parametro deve ser em Camel Case*/}
    <button disabled={respostaDoUsuario!=null} onClick={function() {
      responder("falso")
    }}><img src={nao_png}/></button>
    {respostaDoUsuario?
    <span>
      <img src={props.resposta==respostaDoUsuario?acertou_img:errou_img}/> Você respondeu: {respostaDoUsuario},
      a resposta correta é {props.resposta}
    </span>
    :""
    }
    
  </div>
} 

export default function App() {
  const [acertos, setAcertos] = useState(0);
  const [total, setTotal] = useState(0);
  function responder(acertou) {
    setTotal(total + 1);

    if (acertou) {
      setAcertos(acertos + 1);
    }
  }

  const nota = acertos / listaPerguntas.length * 10;

  return <div> 
    <h1>Quiz</h1>
    {total==listaPerguntas.length?
      <h3>Acertos: {acertos} Nota: {nota} {nota>=7?"Parabéns!":"Mais sorte da próxima vez"}</h3>
      :
      listaPerguntas.map(function(elemento) {
        return <Pergunta 
          key={elemento.id} 
          texto={elemento.pergunta} 
          resposta={elemento.resposta?"verdadeiro":"falso"} 
          onResponder={responder}
          />
      } )}
  </div>;
}