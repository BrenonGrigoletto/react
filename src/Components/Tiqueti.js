import { useState } from 'react';

export default function FormTicket() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <>
            <h2>Vamos fazer seu check-in</h2>
            <label>
                Primeiro nome:{' '}
                <input 
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <br />
            <label>
                Sobrenome:{' '}
                <input
                    value={lastName}
                    onChange={handleLastNameChange}
                />    
            </label>
            <p>
                Seu bilhete será emitido para: <b>{fullName}</b>
            </p>
        </>
    );
}
