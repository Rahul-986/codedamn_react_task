import { useState } from "react";

export default function App() {
  const [totalCost, setTotalCost] = useState("");
  const [interval, setInterval] = useState("");
  const [calculate, setCalculate] = useState("");

  const handleCalculate = () => {
    if (totalCost && interval) {
      const emi = parseFloat(totalCost) / parseInt(interval, 10);
      setCalculate(emi.toFixed(2));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">EMI Calculator</h1>
      <div className="flex flex-col border border-1 rounded bg-white p-6 shadow-md space-y-4">
        <input
          type="number"
          id="totalCost"
          placeholder="Total Loan Amount"
          value={totalCost}
          onChange={(e) => setTotalCost(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          id="numberOfIntervals"
          placeholder="Number of Payments"
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          id="calculate"
          onClick={handleCalculate}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Calculate
        </button>
        {calculate && (
          <div id="output" className="mt-4 p-2 border rounded bg-green-100">
            Monthly Payment: {calculate}
          </div>
        )}
      </div>
    </div>
  );
}
