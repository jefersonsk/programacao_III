function TituloDinamico({texto, nivel}) {
  const Tag = nivel
  return (
    <Tag>{texto}</Tag>
  )
}

export default function App() {
  return (
    <div>
      <TituloDinamico texto="Titulo Principal" nivel="h1" />
      <TituloDinamico texto="Título secundário" nivel="h2" />
      <TituloDinamico texto="Título menor" nivel="h3" />
    </div>
  )
}