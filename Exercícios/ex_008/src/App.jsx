function Mensagem({texto, prioridade}) {
  let formatoTexto = (prioridade=="alta"?"bold":"normal");

  return (
    <div>
      <p style={{fontWeight: formatoTexto}}>{texto}</p>
    </div>
  )
};

export default function App() {
  return (
    <div>
      <Mensagem texto="Servidor indisponível" prioridade="alta"/>
      <Mensagem texto="Atualização Disponível" prioridade="baixa"/>
    </div>
  )
};