function Alerta({tipo, texto}) {
  // let corAtual = "green";

  // if (tipo === "Erro") {
  //   corAtual = "red"; 
  // } else if (tipo === "Aviso") {
  //   corAtual = "yellow"
  // }

  const coresPorTipo = {
    "Erro": "red",
    "Aviso": "yellow",
    "Sucesso": "green"
  }

  return <p style={{color: coresPorTipo[tipo]}}>{tipo}: {texto}</p>  
};

export default function App(){

  return (
    <div>
      <Alerta tipo="Erro" texto="Não foi possível salvar os dadso!"/>
      <Alerta tipo="Sucesso" texto="Cadastro realizado com sucesso!"/>
      <Alerta tipo="Aviso" texto="Existem campos que precisam ser revisados"/>
    </div>
  )

};