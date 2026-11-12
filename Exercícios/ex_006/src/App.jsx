function NotaAluno({nome, nota}) {
  return (
    <div>
      <p>{nome} - Nota: {nota} - {nota>=7?"APROVADO":"REPROVADO"}</p>
    </div>
  )
};

export default function App() {
  return (
    <div>
      <NotaAluno nome="Jeferson" nota="8.5"/>
      <NotaAluno nome="Edna" nota="10"/>
      <NotaAluno nome="João" nota="4.3"/>  
    </div>
  )
};