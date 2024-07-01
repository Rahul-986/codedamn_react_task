import React, { useState } from "react";

export default function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [conversionResult, setConversionResult] = useState(null);

  const handleConvert = async () => {
    const url = `https://open.er-api.com/v6/latest/${from.toUpperCase()}`;
    if (from.length !== 3 || to.length !== 3) {
      alert("Please enter valid 3-letter currency codes.");
      return;
    }
    try {
      const res = await fetch(url);
      const data = await res.json();
      const rate = data.rates[to.toUpperCase()];
      if (rate) {
        setConversionResult(`1 ${from.toUpperCase()} = ${rate} ${to.toUpperCase()}`);
      } else {
        setConversionResult("Conversion rate not available.");
      }
    } catch (error) {
      setConversionResult("Error fetching conversion rate.");
    }
  };

  return (
    <div className="App text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>
      <div className="mb-4">
        <input
          type="text"
          id="from"
          maxLength="3"
          placeholder="From: e.g., USD"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border p-2 mx-2"
        />
        <input
          type="text"
          id="to"
          maxLength="3"
          placeholder="To: e.g., EUR"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border p-2 mx-2"
        />
      </div>
      <button
        id="convert"
        onClick={handleConvert}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Convert
      </button>
      <div id="currencyValue" className="mt-4 text-xl font-bold">
        {conversionResult}
      </div>
    </div>
  );
}
