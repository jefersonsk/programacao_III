import { useState } from "react";

function Volume() {
  const [indiceVolume, setIndiceVolume] = useState(0);

  return (
    <>
      <button onClick={() => setIndiceVolume(Math.min(100, indiceVolume + 1))}>Aumentar</button>
      <button onClick={() => setIndiceVolume(Math.max(0, indiceVolume - 1))}>Diminuir</button>
      <h2>{indiceVolume}</h2>
    </>
  )
}

export default function App() {
  return (
    <Volume />
  )
};