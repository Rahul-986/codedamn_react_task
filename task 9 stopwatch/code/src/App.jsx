import { useState } from "react";

export default function App() {

	const [seconds,setSeconds] = useState("")
	const [disStop,setDisStop]=useState(true)
	const [timer ,setTimer]=useState(0)

    const handleStart=()=>{

	
	 setDisStop(false)
		setInterval(()=>{
			const oldTimer=parseInt(timer)
			setTimer(oldTimer=>{
				if(oldTimer<seconds){
					return parseInt(oldTimer)+1
				}
				else
				{
					return oldTimer
				}
			})
		},1000)
	}

	const handleStop=()=>{
		setDisStop(true)
	}


	return (
		<>

		<div className="  w-screen h-screen bg-purple-100  content-center space-x-[600px]">
			<div className="text-2xl text-gray-600 text-center mb-[70px] mr-[30px]">Timer</div>
			<input type="number" id="seconds-input" className="w-[300px]" placeholder="timer in second" value={seconds} onChange={(e)=>{setSeconds(e.target.value)}} />
			<div id="timer" className="border-2 bg-green-100 border rounded text-center w-[300px] text-xl h-[200px] content-center mb-6 ">{timer}</div>
			<div className="space-x-[11.5%]">
			<button id="start" className="border-1 border bg-red-200 w-24 h-8 rounded  content-center  " disabled={!disStop} onClick={handleStart}>start</button>
			<button id="stop" className="border-1 border bg-red-200 w-24 h-8 rounded content-center " disabled={disStop} onClick={handleStop}>stop</button>
			</div>
			</div>
		</>
	);
}
 
