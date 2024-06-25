import { useState } from "react";

export default function App() {
	const [billAmount,setbillAmount]=useState(null)
	const [tipPercent,setTipPercent]=useState(null)
	const [totalAmount,setTotalAmount]=useState();
   const handleCalculate=()=>{
	const total=parseFloat(billAmount)+(parseFloat(billAmount)*parseFloat(tipPercent)/100)
	setTotalAmount(total.toFixed(2))
   }
  

	return (
		<>
			<h1>Hello there!</h1>
			<input type="text" placeholder="bill Amount" id="billAmount" onChange={(e)=>{setbillAmount(e.target.value)}}/>
			<input type="text" placeholder="tip percent" id="tipPercent" onChange={(e)=>{setTipPercent(e.target.value)}}/
			>
			<button id="calculateAmount" onClick={handleCalculate}>calculate</button>
			<p id="totalAmount" >{totalAmount}</p>

		</>
	);
}
