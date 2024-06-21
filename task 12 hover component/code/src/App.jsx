import { useState } from "react";
import "./App.css";

const App = () => {
	// Edit this component
const [count, setCount]=useState(0);
const handleHover=()=>{
	setCount(count+1)
}

	return (
		<div>
			<button data-testid="button" onMouseEnter={handleHover}>Hover Me</button>
			<h1 data-testid="count">{count}</h1>
		</div>
	)
}

export default App
