import { useState } from "react";

export default function App() {
    const [table, setTable] = useState("");
    const [resultTable, setResultTable] = useState([]);

    const handleTable = () => {
        const inputNum = parseInt(table);
        if (isNaN(inputNum)) return;

        const tab = [];
        for (let i = 1; i <= 20; i++) {
            tab.push(`${inputNum} x ${i} = ${inputNum * i}`);
        }
        setResultTable(tab);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Multiplication Table Generator</h1>
            <input
                type="number"
                id="number"
                placeholder="Enter table number"
                value={table}
                onChange={(e) => setTable(e.target.value)}
                className="p-2 border border-gray-300 rounded mb-4"
            />
            <button
                id="generateTable"
                onClick={handleTable}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700"
            >
                Submit
            </button>

            <ul id="multiplicationTable" className="list-none">
                {resultTable.map((item, index) => (
                    <li key={index} className="text-lg mb-1">{item}</li>
                ))}
            </ul>
        </div>
    );
}
