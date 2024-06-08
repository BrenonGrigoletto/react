import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Questionario from './Components/Questionario';
import Tiqueti from './Components/Tiqueti';
import Accordion from './Components/Accordion';
import Chat from './Components/Chat';
import ListaContatos from './Components/ListaContatos';

const containerStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
    padding: '10px'
};

const innerContainerStyle = {
    marginBottom: '10px'
};

const contacts = [
    { name: 'Taylor', email: 'taylor@gmail.com' },
    { name: 'Alice', email: 'alice@gmail.com' },
    { name: 'Bob', email: 'bob@gmail.com' }
];

export default function Atividade05() {
    const [to, setTo] = useState(contacts[0]);

    return (
        <div>
            <div>
                <Link to="/">Voltar</Link>
            </div>
            <h1>Atividade 5</h1>

            <div style={containerStyle}>
                <Questionario />
            </div>

            <div style={containerStyle}>
                <Tiqueti />
            </div>

            <div style={containerStyle}>
                <Accordion />
            </div>

            <div style={containerStyle}>
                <div style={innerContainerStyle}>
                    <ListaContatos
                        contacts={contacts}
                        selectedContact={to}
                        onSelect={contact => setTo(contact)}
                    />
                </div>
                <div style={innerContainerStyle}>
                    <Chat key={to.email} contact={to} />
                </div>
            </div>

        </div>
    );
}

