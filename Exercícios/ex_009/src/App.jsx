function StatusUsuario({nome, status}) {
  return (<p>{nome} - <strong>{status}</strong></p>)
}

export default function App() {
  return (
    <div>
      <StatusUsuario nome="João" status="Online" />
      <StatusUsuario nome="Jeferson" status="Offline" />
      <StatusUsuario nome="Edna" status="Ocupado" />
    </div>
  )
}