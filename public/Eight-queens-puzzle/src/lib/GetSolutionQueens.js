import React, { useEffect, useState } from "react";
 import FerchGetPost from "./db";

const GetSolutionQueens = () => {
	
	const [solutionQueen, setSolutionQueen] = useState([]);

	const GetsolutionQueens = async ()=> {
		await FerchGetPost()
			.then((data) => {
				setSolutionQueen(data)
			});
		
	// fetch.post('http://localhost:8000/solutionQueens')
	// 	.then(res => {
	// 		console.log(res);
	// 		console.log(res.data);
	// 		const solutions = res.data;
	// 		setSolutionQueen(solutions);
	// 	})
	}
	useEffect(() => {
		GetsolutionQueens();
	});
	console.log(solutionQueen);

    return(
		<div>
			{solutionQueen &&
				solutionQueen.map((result)=>{
					console.log(result.solutionQueens)
                    return(
                        <div className="container-Result">
                            <p>{result.solutionQueens}</p>
                        </div>
                    )
                })
			}
		</div>
	)
}

export default GetSolutionQueens;