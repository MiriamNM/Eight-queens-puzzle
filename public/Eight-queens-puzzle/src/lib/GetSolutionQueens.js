import React, { useEffect, useState } from "react";

const GetSolutionQueens = () => {
	const [solutionQueen, setSolutionQueen] = useState();
	
	const GetsolutionQueens = async()=> {
		const url = 'http://localhost:4000/solutionQueens';
		const response = await fetch(url,{
			method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify()
		});
		const dataResult = await response.json();
		const arr = dataResult.body;
		setSolutionQueen(arr);
	}

	useEffect(() => {
		GetsolutionQueens();
	}, []);
	console.log(solutionQueen)
    return(
		<div>
			{solutionQueen.map((result)=>
				<div className="container-Result">
					<p>{result.solutionQueens}</p>
				</div>
			)}
		</div>
	)
}

export default GetSolutionQueens;