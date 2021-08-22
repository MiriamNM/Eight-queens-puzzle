const BASEURL = 'http://localhost:8000/solutionQueens';

const FetchFunction = () => {
    return fetch(BASEURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query:`
        EigthQueensPuzzle{
            solutionqueens
        }
        `}),
    })
    .then((res) => res.json()).catch(e => console.log("ocurrio un error", e))
}
export default FetchFunction;