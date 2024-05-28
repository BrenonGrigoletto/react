import React, { useState } from 'react';
import { sculptureList } from './Dados.js';

export default function Monumentos() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Próximo
      </button>
      <h2>
        <i>{sculpture.nome} </i>
        by {sculpture.artista}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      
      <button onClick={handleMoreClick}>  
        {showMore ? 'Hide' : 'Mostar'} Detalhes
      </button>
      {showMore && <p>{sculpture.descricao}</p>}
      <div>
        <img
          src={sculpture.url}
          alt={sculpture.alt}
        />
      </div>
    </>
  );
}
