import { useState } from "react";

function App() {
	const [isVisible,SetIsvisible]=useState(true);
	const handletoggle=()=>{
		SetIsvisible(!isVisible)
	};
	return (
		<div>
			{isVisible &&<p id="my-paragraph">This is the paragraph you can toggle.</p>}

			<button id="toggle-btn" onClick={handletoggle}>Toggle Paragraph</button>
		</div>
	);
}

export default App;
