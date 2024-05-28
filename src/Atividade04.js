import React from 'react';
import Monumentos from './Components/Monumentos';
import Play from './Components/Play';
import { Link } from 'react-router-dom';

export default function Atividade04() { 
    return (
        <>
            <Link to="/">Início</Link> {}
            <h1>Atividade 04</h1>
            <Play />
            <Monumentos/>
            <br />
        </>
    );
}