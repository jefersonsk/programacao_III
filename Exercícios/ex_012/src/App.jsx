function PrecoParcelado({nome, precoTotal, parcelas}) {
  let valorParcelado = precoTotal / parcelas
  valorParcelado = valorParcelado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  const precoTotalConvertido = precoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

  return (
    <p>{nome} - Valor total: {precoTotalConvertido} - Parcelas: {parcelas} - Valor parcelado: {valorParcelado}</p>
  )
}

export default function App() {
  return (
    <div>
      <PrecoParcelado nome="TV" precoTotal="1200" parcelas="10" />
      <PrecoParcelado nome="Impressora" precoTotal="600" parcelas="6" />
    </div>
  )
}