import React, { useState } from 'react';

function App() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        console.log("Eingabe gesendet: ", inputValue);
        // Hier könnten zusätzliche Aktionen stehen, wie das Senden der Daten an ein Backend
    };

    return (
        <div>
            <h1>Willkommen bei FörderApp</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Senden</button>
        </div>
    );
}

export default App;
