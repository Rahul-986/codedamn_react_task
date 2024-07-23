import React, { useState } from 'react';

/**
 * ToggleButton component represents a button that can toggle between
 * "on" and "off" states.
 * 
 * @returns {JSX.Element} Rendered ToggleButton component.
 */
function ToggleButton() {
    // State to keep track of the toggle status (either "on" or "off").
    const [isOn, setIsOn] = useState(true);

    /**
     * Handles the click event on the button and toggles the isOn state.
     */
    const handleToggle = () => {
        setIsOn(prevIsOn => !prevIsOn);
    }

    return (
        <button 
            id="toggle"
            onClick={handleToggle}
            style={{
                backgroundColor: isOn ? 'black' : 'lightgray',
                color: isOn ? 'white' : 'black',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
        >
            {isOn ? 'on' : 'off'}
        </button>
    );
}

function App() {
    return (
        <div>
            <h1>Hello World</h1>
            <ToggleButton />
        </div>
    );
}

export default App;
