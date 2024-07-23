import React, { useState } from 'react';

function App() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(32);

    // Handle Celsius input change
    const handleCelsiusChange = (e) => {
        const newCelsius = e.target.valueAsNumber;
        setCelsius(newCelsius);
        const newFahrenheit = (newCelsius * 9/5) + 32;
        setFahrenheit(newFahrenheit);
    }

    // Handle Fahrenheit input change
    const handleFahrenheitChange = (e) => {
        const newFahrenheit = e.target.valueAsNumber;
        setFahrenheit(newFahrenheit);
        const newCelsius = (newFahrenheit - 32) * 5/9;
        setCelsius(newCelsius);
    }

    return (
        <div>
            <h1>Temperature Converter</h1>
            <div>
                <label htmlFor="celsius">Celsius:</label>
                <input 
                    type="number" 
                    id="celsius" 
                    value={celsius} 
                    onChange={handleCelsiusChange} 
                />
            </div>
            <div>
                <label htmlFor="fahrenheit">Fahrenheit:</label>
                <input 
                    type="number" 
                    id="fahrenheit" 
                    value={fahrenheit} 
                    onChange={handleFahrenheitChange} 
                />
            </div>
        </div>
    );
}

export default App;
