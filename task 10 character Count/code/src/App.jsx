import { useState } from "react";

export default function App() {
	const [charc,setCharc]=useState(0);

	return (
		<>
     <textarea id="textInput" onChange={(e)=>setCharc(e.target.value.length)} />
	 <div id="count">{charc}</div>


		</>
	);
}
