import { useState } from "react";

function MudaCorFundo() {
  const [escuro, setEscuro] = useState(false);

  return (
    <div style={{backgroundColor: escuro ? "black" : "white", color: escuro ? "white" : "black"}}>
      <button onClick={() => setEscuro(!escuro)}>Alterar Cor</button>
    </div>
  )
}

export default function App() {
  return (
    <>
      <MudaCorFundo />
    </>
  )
}