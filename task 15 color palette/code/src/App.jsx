import React, { useState } from 'react';

function App() {
  const [currentPalette, setCurrentPalette] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generatePalette = () => {
    const newPalette = [];
    for (let i = 0; i < 5; i++) {
      newPalette.push(generateRandomColor());
    }
    setCurrentPalette(newPalette);
  };

  const savePalette = () => {
    setSavedPalettes([...savedPalettes, currentPalette]);
  };

  const deletePalette = (index) => {
    const newPalettes = savedPalettes.filter((_, i) => i !== index);
    setSavedPalettes(newPalettes);
  };

  return (
    <div className="App text-center font-sans p-4">
      <button
        id="generate"
        className="bg-blue-500 text-white px-4 py-2 rounded m-2"
        onClick={generatePalette}
      >
        Generate
      </button>
      <div id="current-palette" className="flex flex-wrap justify-center mt-4">
        {currentPalette.map((color, index) => (
          <div
            className="color-block w-24 h-24 flex items-center justify-center m-2 text-white font-bold rounded"
            key={index}
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
        {currentPalette.length > 0 && (
          <button
            id="save"
            className="bg-green-500 text-white px-4 py-2 rounded m-2"
            onClick={savePalette}
          >
            Save Palette
          </button>
        )}
      </div>
      <div id="saved-palettes" className="mt-8">
        {savedPalettes.map((palette, index) => (
          <div key={index} className="mb-4">
            <div className="flex flex-wrap justify-center">
              {palette.map((color, i) => (
                <div
                  className="color-block w-24 h-24 flex items-center justify-center m-2 text-white font-bold rounded"
                  key={i}
                  style={{ backgroundColor: color }}
                >
                  {color}
                </div>
              ))}
            </div>
            <button
              className="delete-palette-button bg-red-500 text-white px-4 py-2 rounded m-2"
              onClick={() => deletePalette(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
