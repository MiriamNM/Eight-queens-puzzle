import React, { useEffect, useState } from "react";
import FetchFunction from "./db";

const GetSolutionQueens = () => {
	
	const [solutionQueen, setSolutionQueen] = useState([]);


	const ApiData = async () => {
        const res = await FetchFunction();
        setSolutionQueen(res);
		console.log(setSolutionQueen(res), 'hola');
    };

	useEffect(() => {
		ApiData()
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
                })
			}
		</div>
	)
}

export default GetSolutionQueens;