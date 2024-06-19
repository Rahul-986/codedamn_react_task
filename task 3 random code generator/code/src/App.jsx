import {  useState } from "react";

export default function App() {

	const [startRange,setStartRange]=useState("");
	const [endRange,setEndRange]=useState("");
	const [output,setOutput]=useState("");

	

	const generateRandomNumber=()=>{
	
			const start = parseInt(startRange); // Ensuring the conversion of string to integer
			const end = parseInt(endRange);
		if(isNaN(start)||isNaN(end)){
			setOutput("Invalid Input")
			return;
		}
		else if(startRange > endRange){
			setOutput( "start range must be less than or equal to the end range");
			return;
		}
		else 
		{
			const randomNumber=Math.floor(Math.random() * (end-start+1) + start)
			setOutput( randomNumber);
			return;
		}
	}


	return (
		<>
			<input type="number" id="startRange" name="startRange" value={startRange}  onChange={e => setStartRange(e.target.value)} />
			<input type="number" id="endRange" name="endRange" value={endRange}  onChange={e => setEndRange(e.target.value)} />
			<button id="generate" onClick={generateRandomNumber}>generate</button>
			<div id="randomNumber">{output}</div>

		</>
	);
}
