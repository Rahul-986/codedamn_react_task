import { useState } from "react";

export default function App() {
	const units=["centimeters","inches","feet","meters","kilometers","miles"]

	const[fromUnit,setfromUnit]=useState(units[0]);
	const[toUnit,settoUnit]=useState(units[1]);
	const[fromValue,setfromValue]=useState("");
	const[converted,setconverted]=useState("");

	// You can make use of this object to construct the select elements and the conversion
	const conversionRates = {
		centimeters: 1,
		inches: 2.54,
		feet: 30.48,
		meters: 100,
		kilometers: 100000,
		miles: 160934.4,
	};

	const handleconverter=()=>{
		if(fromValue!=="" && !isNaN(fromValue))
		{
          const values=fromValue * conversionRates[fromUnit]
		  const converted=values/conversionRates[toUnit]
		  setconverted(converted.toFixed(3))
		}
		else
		{
			setconverted("")
		}
	}
	return (
		<>
		<div className="flex flex-col justify-center">
			<h1 className="text-4xl text-center ">distance converter</h1>
			<select name="" id="fromUnit" value={fromUnit} onChange={(e)=>setfromUnit(e.target.value)}
			className="flex flex-col ml-[45%] mt-[7%] py-2 border border1 bg-red-100 m-2 w-32">
				{units.map((unit)=>(
               <option value={unit}>{unit}</option>
			))}</select>
			<select name="" id="toUnit" value={toUnit} onChange={(e)=>settoUnit(e.target.value)}
			className="flex flex-col ml-[45%] py-2 border border-1 bg-red-100 m-2 w-32">
				{units.map((unit)=>(
               <option value={unit}>{unit}</option>
			))}</select>
			<input type="number" id="fromValue"  className="border border-2 rounded border-red-200 w-32 ml-[45%]" value={fromValue} onChange={(e)=>setfromValue(e.target.value)} />
			<button id="convert" onClick={handleconverter} className="bg-blue-100 p-2 w-32 ml-[45%] mt-2">converter</button>
			<div id="outputValue" className="w-48 h-48 text-center border border-2 border-indigo-200 ml-[45%] mt-2 ">{converted}</div>

			</div>
		</>
	);
}
