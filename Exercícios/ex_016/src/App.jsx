function ProgressoTarefa({nome, tarefa}) {
  const andamento = tarefa == 100 ? (<strong>"Concluído"</strong>):`Em andamento ${tarefa} %`
  return (
    <p>{nome}: {andamento}</p>
  )
}

export default function App() {
  return (
    <div>
      <ProgressoTarefa nome="Criar Interface" tarefa={40} />
      <ProgressoTarefa nome="Criar Banco de Dados" tarefa={100} />
    </div>
  )
}