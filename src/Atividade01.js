
import React from 'react';
import Relogio from './Components/Relogio'; 
import Letreiro from './Components/Letreiro';
import { Link } from 'react-router-dom';

export default function Atividade01() { 
    return (
        <>
            <Link to="/">Início</Link> {}
            <h1>Atividade 01</h1>
            <Relogio />
            <Letreiro />
            <br />
        </>
    );
}