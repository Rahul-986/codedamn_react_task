import { useEffect } from "react";
import { useState } from "react";

const getDay=(date)=>{
	const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   return weekday[date.getDay()];
}

const getdate=(date)=>{
	const monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
  ];
  
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  
  return  `${monthNames[month]} ${day}, ${year}`;
  
}
const getTime=(date)=>{
	return date.toTimeString().slice(0, 8);
}

export default function App() {
const [date,setDate] =useState(new Date());

useEffect(()=>{
	setInterval(()=>{
		setDate(new Date())
	},1000)
  
},[])
	return (
		<>
			<h1>Hello there!</h1>
			<div id="day">{getDay(date)}</div>
			<div id="date">{getdate(date)}</div>
			<div id="time">{getTime(date)}</div>
		</>
	);
}

