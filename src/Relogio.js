import React, { useState, useEffect } from 'react';

function Relogio() {
  const [horas, sethoras] = useState('');

  useEffect(() => {
    const tempo = setInterval(() => {
      const atual = new Date();
      const h = atual.getHours().toString().padStart(2, '0');
      const m = atual.getMinutes().toString().padStart(2, '0');
      const s = atual.getSeconds().toString().padStart(2, '0');
      const nvHora = `${h}:${m}:${s}`;
      sethoras(nvHora);
    }, 1000);

    return () => clearInterval(tempo);
  }, []);

  return (
    <div>
      <h1>Relógio</h1>
      <p>{horas}</p>
    </div>
  );
}

export default Relogio;