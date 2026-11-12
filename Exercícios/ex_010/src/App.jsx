import { useState } from "react";

function BotaoAcao({texto, desabilitado, clicar}) {
  return (
    <div>
      <button disabled={desabilitado} onClick={clicar}>{texto}</button>
    </div>
  )
};

export default function App() {
  const [salvarDesabilitado, setSalvarDesabilitado] = useState(false);

  function desabilitarSalvar() {
    setSalvarDesabilitado(true);
  };

  function habilitarSalvar() {
    setSalvarDesabilitado(false)
  }

  return (
    <div>
      <BotaoAcao texto="Salvar" desabilitado={salvarDesabilitado} clicar={desabilitarSalvar}/>
      <BotaoAcao texto="Excluir" desabilitado={false} clicar={habilitarSalvar}/>
    </div>
  )
};