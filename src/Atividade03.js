import React from 'react';
import Galeria from './Components/Galeria';
import { Link } from 'react-router-dom';

export default function Atividade03() { 
    return (
        <>
            <Link to="/">Início</Link> {}
            <h1>Atividade 03</h1>
            <Galeria />
            <br />
        </>
    );
}