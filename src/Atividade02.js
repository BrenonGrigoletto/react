import React, { useState } from 'react';
import './App.css';

function GenderCounter({ label, gender, count, increment, decrement }) {
    return (
        <div className="gender-container">
            <div className="label">
                <h1>{label}</h1>
            </div>
            <div className="image-container">
                <img src={`/${gender}.jpg`} alt={gender} className="image" />
                <div className="button-group">
                    <button className="button incre" onClick={() => increment(gender)}>+</button>
                    <button className="button decre" onClick={() => decrement(gender)}>-</button>
                </div>
            </div>
            <div className="count" id={`cont_${gender}`}>{count}</div>
        </div>
    );
}

function App() {
    const [contHomem, setContHomem] = useState(0);
    const [contMulher, setContMulher] = useState(0);

    const incrementar = (gender) => {
        if (gender === 'homem') {
            setContHomem(prevCount => prevCount + 1);
        } else if (gender === 'mulher') {
            setContMulher(prevCount => prevCount + 1);
        }
    }

    const decrementar = (gender) => {
        if (gender === 'homem' && contHomem > 0) {
            setContHomem(prevCount => prevCount - 1);
        } else if (gender === 'mulher' && contMulher > 0) {
            setContMulher(prevCount => prevCount - 1);
        }
    }

    const reiniciarContagem = () => {
        setContHomem(0);
        setContMulher(0);
    }

    return (
        <div className="counter">
            <div>
                <h1>Total</h1>
                <div className="count" id="contador_total">{contHomem + contMulher}</div>
            </div>
            <GenderCounter
                label="Homens"
                gender="homem"
                count={contHomem}
                increment={incrementar}
                decrement={decrementar}
            />
            <GenderCounter
                label="Mulheres"
                gender="mulher"
                count={contMulher}
                increment={incrementar}
                decrement={decrementar}
            />
            <div className="reset-button" onClick={reiniciarContagem}>&#128260;</div>
        </div>
    );
}

export default App;
