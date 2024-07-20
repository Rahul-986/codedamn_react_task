const App = () => {

	const handleClick=()=>{
		console.log("Clicked!")
	}
	// Edit this component
	return <button data-testid="button" onClick={handleClick}>Click me!</button>
}

export default App
