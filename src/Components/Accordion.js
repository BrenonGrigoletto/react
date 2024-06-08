import { useState } from 'react';

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Almaty, Cazaquistão</h2>
            <Panel 
                title="Sobre"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                Com uma população de cerca de 2 milhões, Almaty é
                a maior cidade do Cazaquistão. De 1929 a 1997,
                foi a capital do país.
            </Panel>
            <Panel
                title="Etimologia"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                O nome vem de <span lang="kk-KZ">kəzɐx</span>,
                a palavra cazaque para "maçãs" e é frequentemente traduzido
                como "cheio de maçãs". Na verdade, a região ao redor
                de Almaty é considerada o lar ancestral da
                maçã, e o selvagem <i lang="la">Malus sieversii</i>
                é considerado um provável candidato a ancestral
                da moderna maçã doméstica.
            </Panel>
        </>
    );
}

function Panel({
    title,
    children,
    isActive,
    onShow
}) {
    return (
        <section className='panel'>
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    Mostrar
                </button>
            )}
        </section>
    );
}
