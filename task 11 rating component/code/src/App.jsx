import { useState } from "react";

export default function App() {
	const [emoji,setEmoji] =useState(null);
	const [content,setContent] =useState("");
	const handleSubmit=()=>{
      console.log(emoji," ",content);
	}

	const emojis=["😍", "😀", "🙁", "😭"]
	return (
		<>
		<div id="feedback" className="p-1 justify-center flex space-x-2">
			{emojis.map((emoji)=>(

			<button onClick={(e)=>{setEmoji(e.target.value)}}>{emoji}</button>
			))}
		</div>
		<div className={"flex flex-col" + (emoji==null ? " hidden":"")}>
		<textarea className="border-2 border-gray-700 p-2 m-2 " onChange={(e)=>{setContent(e.target.value)}}/>
		<button id="submit" className="border-1 border p-2 rounded bg-blue-400"onClick={handleSubmit}>Submit</button>
		</div>
		</>
	);
}
