import ItemLista from "./ItemLista";
import { useState, useRef } from "react";

function App() {
  const [listaMercado, setListaMercado] = useState([]);
  const inputAdicionar = useRef();

  const adicionarElementoNaLista = () => {
    const novaLista = [...listaMercado];
    const valorInput = inputAdicionar.current.value;

    if (valorInput) {
      novaLista.push(valorInput);
      setListaMercado(novaLista);  
      inputAdicionar.current.value = "";
    }
    
  }

  return(
    <>
      <h1>Lista de Compras</h1>
      <input ref={inputAdicionar} type="text" placeholder="Digite um item"/>
      <button onClick={() => adicionarElementoNaLista()}>Adicionar</button>

      {listaMercado.length > 0 ? <ul>
        {
          listaMercado.map((itemLista, index) => (
            <ItemLista key={index}
            itemLista={itemLista}
            indexItem={index}
            listaMercado={listaMercado} 
            setListaMercado={setListaMercado}/>
          ))
        }
      </ul> : <p>Você não tem nenhum item em sua lista.</p>}


    </>
  );
}

export default App;