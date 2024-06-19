import {  useState } from "react";

const App=()=>{
const [count,setCount]=	useState([0,0,0,0]);
  const handleCount=(index)=>{
	const votes=[...count];
	votes[index]+=1;
	setCount(votes)


  }
	return(
		<>
	    <div id="pollComponent">
            <h4 id="question">What is your favorite programming language?</h4>
            <button className="option" onClick={() => handleCount(0)}>
                <span>C++</span>
                <span>{count[0]}</span>
            </button>
            <button className="option" onClick={() => handleCount(1)}>
                <span>Java</span>
                <span>{count[1]}</span>
            </button>
            <button className="option" onClick={() => handleCount(2)}>
                <span>Python</span>
                <span>{count[2]}</span>
            </button>
            <button className="option" onClick={() => handleCount(3)}>
                <span>JavaScript</span>
                <span>{count[3]}</span>
            </button>
        </div>
	
		</>

	)
};
export default App;