import React, { useState, useEffect } from 'react';

function Letreiro() {
  const tex = "Conheça a Fatec! ";
  const [digitacao, digitacaoTexto] = useState('');

  useEffect(() => {
    let index = 0;

    const intervalo = setInterval(() => {
      digitacaoTexto((conteudo) => {
        index = (index + 1) % tex.length;
        return tex.substring(0, index);
      });
    }, 707);

    return () => clearInterval(intervalo);
  }, [tex]);

  return (
    <div>
      <h1>{digitacao}</h1>
    </div>
  );
}

export default Letreiro;