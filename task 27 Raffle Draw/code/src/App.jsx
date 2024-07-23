import React, { useState } from 'react';

const RandomNamePicker = () => {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);
  const [pickedList, setPickedList] = useState([]);
  const [selectedName, setSelectedName] = useState('');

  // Handle name input change
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // Add name to the list on 'Enter' key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && name.trim()) {
      setNameList((prevList) => [...prevList, name.trim()]);
      setName(''); // Clear input field
    }
  };

  // Pick a random name and move it to pickedList
  const handlePickName = () => {
    if (nameList.length === 0) return;
    const randomIndex = Math.floor(Math.random() * nameList.length);
    const pickedName = nameList[randomIndex];
    setSelectedName(pickedName);
    setNameList((prevList) => prevList.filter((name, index) => index !== randomIndex));
    setPickedList((prevList) => [...prevList, pickedName]);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter name"
          className="border rounded px-3 py-2 w-full"
        />
      </div>

      <div id="nameList" className="mb-4">
        {nameList.map((name, index) => (
          <span key={index} className="name block text-gray-700 mb-1">
            {name}
          </span>
        ))}
      </div>

      <button
        id="pick"
        onClick={handlePickName}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Pick a Name
      </button>

      {selectedName && (
        <dialog id="nameDialog" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <p className="text-xl">{selectedName}</p>
            <button
              onClick={() => document.getElementById('nameDialog').close()}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </dialog>
      )}

      <div id="pickedList" className="mt-4">
        {pickedList.map((name, index) => (
          <span key={index} className="name block text-gray-500 mb-1">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RandomNamePicker;
