function UseCard({nome, idade, cidade}){
  return <div>
    <h1 style={{color: "red"}}>{nome}</h1>
    <p>Idade: {idade}</p>
    <p>Cidade: {cidade}</p>
  </div>
};

export default function App() {
  return (
    <div>
      <UseCard nome="Maria" idade="29" cidade="Porto Alegre" />
      <UseCard nome="Jeferson" idade="51" cidade="Viamão" />
    </div>
  )
};