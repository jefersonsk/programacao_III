// Crie um componente que exibe uma área de conteúdo com um texto e um botão “Alternar tema”. 
// Ao clicar, o componente deve alternar entre dois temas visuais 
// (por exemplo: fundo claro com texto escuro e fundo escuro com texto claro), modificando o estilo dessa área.

import { useState } from "react";

function AlternarTema() {
  const [alterna, setAlterna] = useState(true);

  return <div style={{
    width: "400px", 
    height:"400px", 
    backgroundColor: alterna?"blue":"white",
    color: alterna?"white":"blue"}}>
    <h3>Exercício 2</h3>
    <button onClick={()=>!setAlterna(!alterna)}>Alternar</button>
  </div>
};

export default function App() {
  return <AlternarTema/>
};