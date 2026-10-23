// Crie um componente com um botão “Mostrar/Esconder”. Ao clicar, o componente deve alternar entre exibir e 
// não exibir uma mensagem de texto na tela.

import { useState } from "react";

function MostrarEsconder() {
  const [mensagem, setMensagem] = useState("");

    return <div>
      <button onClick={()=>!mensagem?setMensagem("Olá Mundo"):setMensagem("")}>Mostrar/Esconder</button>
      <p>{mensagem}</p>
    </div>
  
};

export default function App() {
  return <MostrarEsconder/>
}