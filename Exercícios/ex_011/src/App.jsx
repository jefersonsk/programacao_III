function CaixaTema({tema, conteudo}) {
  const corFundoTexto = (tema=="claro"?{color: "black", backgroundColor: "white"}:{color: "white", backgroundColor: "black"})
  return (
    <p style={corFundoTexto}>{conteudo}</p>
  )
};

export default function App() {
  return (
    <div>
      <CaixaTema tema="claro" conteudo="Conteúdo utilizando tema claro!" />
      <CaixaTema tema="escuro" conteudo="Conteúdo utilizando tema escuro" />
    </div>
  )
};