import { useEffect,useState } from "react";

function App() {
	const [count, setCount] = useState(1);
	useEffect(()=>{
  console.log(`newCount: ${count}`)

	},[count])

	return (
		<>
			<div className="card">{count}</div>
			<button
				id="increment"
				data-testid="incrementBtn"
				onClick={() => {
					setCount((count) => count + 1);

				
				}}
			>
				Increment
			</button>
		</>
	);
}

export default App;
