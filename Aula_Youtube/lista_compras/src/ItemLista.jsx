import React from 'react'

const ItemLista = ({ itemLista, indexItem, listaMercado, setListaMercado }) => {
    const removerItemDaLista = (indexClicado) => {
        const novaLista = [...listaMercado];
        const novaListaFiltrada = novaLista.filter(
            (_, indexAtual) => indexAtual !== indexClicado
        );
        
        setListaMercado(novaListaFiltrada);
    };

  return (
    <li>
        <p>{itemLista}</p>
        <button onClick={() => removerItemDaLista(indexItem)}>Excluir</button>
    </li>
  );
}

export default ItemLista
