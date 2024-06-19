import { useEffect } from "react";
import { useState } from "react";

export default function App() {
	const [inputs, setInput]=useState({
		principal:1000,
		rate:7,
		time:5
	});
	const {principal,rate,time}=inputs;

	const simpleInterest=((principal*rate*time)/100).toFixed(2)
	const totalAmount=(parseFloat(principal)+parseFloat(simpleInterest)).toFixed(2)
	const handleInput=(e)=>{
		const{name,value}=e.target;
       setInput(values=>({...values,[name]:value}));
	   
	}
	console.log(inputs)
	 
	

	return (
		<>
		<div className="  w-full h-screen bg-red-100 flex items-center flex-col ">
			
			 Enter Principal<input type="number" id="principal" defaultValue="1000" className="border-2 bg-gray-300 m-2" name="principal" value={principal} onChange={handleInput}/>
			Enter rate <input type="number" id="rate" defaultValue="7" className="border-2 bg-gray-300 m-2 " name="rate" value={rate} onChange={handleInput}/>
			 Enter Time <input type="number" id="time" defaultValue="5" className="border-2 bg-gray-300 m-2" name= "time" value={time} onChange={handleInput}/>

           Simple Interest <div id="simpleInterest" className="border-2 w-48 h-6 bg-green-100">
			{simpleInterest}
		   </div>
           Total Amount <div id="totalAmount" className="border-2 w-48 h-6 bg-green-100">
			{totalAmount}
		   </div>
			
			


		</div>
		</>
	);
}
