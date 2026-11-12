function Produto({nome, preco, emPromocao}) {
  let precoConvertido = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

  return (
    <p>{nome} - {precoConvertido} {emPromocao?"Em Promoção!":""}</p>
  )
}

export default function App() {
  return (
    <div>
      <Produto nome="Mouse" preco={150} emPromocao={true}/>
      <Produto nome="Teclado" preco={290} emPromocao={false}/>
    </div>
  )
};