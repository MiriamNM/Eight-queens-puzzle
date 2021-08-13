import React, { useEffect, useState } from "react";

const GetSolutionQueens = ({data}) => {
	console.log(data)
	const [solutionQueen, setSolutionQueen] = useState();
	const GetsolutionQueens = async()=> {
		let url = 'http://localhost:4000/solutionQueens';
		let getFetchData = await fetch(url).then((result) => result.json());
		setSolutionQueen(getFetchData);
	}
	useEffect(() => {
		GetsolutionQueens();
	}, []);

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
                    })}
		</div>
	)
}

export default GetSolutionQueens;