import React, { useState } from "react";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [daysDifference, setDaysDifference] = useState(null);
  const [error, setError] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setDaysDifference(null); // Reset days difference on date change
    setError(""); // Reset error on date change
  };

  const handleFindDays = () => {
    if (!selectedDate) {
      setError("Please select a date.");
      return;
    }

    const today = new Date();
    const pickedDate = new Date(selectedDate);

    // Resetting the time of today to 0 for accurate calculations
    today.setHours(0, 0, 0, 0);

    // Check if the picked date is in the past
    if (pickedDate < today) {
      setError("error"); // Display 'error' message if date is in the past
      setDaysDifference(null);
      return;
    }

    // Calculate the difference in days
    const timeDifference = pickedDate - today;
    const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    setDaysDifference(days);
    setError(""); // Clear any previous error
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Days Until Your Date</h1>
      <input
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
        className="border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:border-blue-400"
      />
      <button
        id="findDays"
        onClick={handleFindDays}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Find Days
      </button>
      {daysDifference !== null && (
        <div className="mt-4 text-green-600">
          <h2 className="text-xl">Days until selected date: {daysDifference}</h2>
        </div>
      )}
      {error && (
        <div id="error" className="mt-4 text-red-600">
          <h2 className="text-xl">{error}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
