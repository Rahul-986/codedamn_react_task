import {useEffect,useState } from "react"

export default function App() {
	const [page, setPage] = useState(1);
	const [posts,setPost]=useState([]);

	useEffect(()=>{
    fetchData()
	},[page])
    const handleClick=()=>{
		setPage(page+1);
		console.log("page "+page)
		fetchData();
	}

	const fetchData=()=>{
		const url=`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
		fetch(url).then((res)=>{
		  return res.json()

		}).then((data)=>{
			const prevData=[...posts]
			const newData=prevData.concat(data)

	        setPost(newData)
		})
	}

	return (
		<>
		
		<table>
			<thead>
			<tr>
					
			      <th>id</th>
				  <th>title</th> 
			     <th>body</th> 
			</tr>
			</thead>
			<tbody>
            {posts.map(post=>(
          <tr>
			<td>{post.id}</td>
			<td>{post.title}</td>
			<td>{post.body}</td>
		 </tr>
		))}
			</tbody>
		</table>
			<button id="next" onClick={handleClick}>next</button>
		</>
	)
}

