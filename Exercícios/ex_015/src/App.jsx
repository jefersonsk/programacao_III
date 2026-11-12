function PlacarJogo({timeA, timeB, pontosA, pontosB}) {
  let vencedor = "Empate";

  // if (pontosA > pontosB) {
  //   vencedor = `${timeA} está vencendo.`
  // } else if (pontosB > pontosA) {
  //   vencedor = `${timeB} está vencendo.`
  // }
  if (pontosA !== pontosB) {
    vencedor = (pontosA > pontosB ? `${timeA} está vencendo.` : `${timeB} está vencendo`)
  };

  return (
    <div>
      <p>{timeA}: {pontosA}</p>
      <p>{timeB}: {pontosB}</p>
      <h1>{vencedor}</h1>
    </div>
  )
};

export default function App() {
  return (
    <div>
      <PlacarJogo timeA="Azul" timeB="Vermelho" pontosA={2} pontosB={3} />
      <PlacarJogo timeA="Verde" timeB="Amarelo" pontosA={0} pontosB={0} />
    </div>
  )
}