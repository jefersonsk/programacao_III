function FilmeCard({titulo, genero, classificacao}) {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>Gênero: {genero}</p>
      <p>{classificacao<12?"Livre para todas as idades":"Classificação: " + classificacao}</p>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <FilmeCard titulo="Aventura no Espaço" genero="Aventura" classificacao="10" />
      <FilmeCard titulo="John Wick" genero="Ação" classificacao="16" />
    </div>
  )
}