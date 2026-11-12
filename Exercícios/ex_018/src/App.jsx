import { useState } from "react";

function MostrarEsconder() {
  const [mostrar, setMostrar] = useState(false);
  return (
    <>
      <button onClick={() => setMostrar(!mostrar)}>{mostrar?"Esconder":"Mostrar"}</button>
      {mostrar && <p>Olá</p>}
    </>
  );
}

export default function App() {
  return <>
    <MostrarEsconder />
  </>
};