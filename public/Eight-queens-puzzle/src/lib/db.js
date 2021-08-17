const BASEURL = 'http://localhost:8000/solutionQueens';

const FerchGetPost = () => {
    // let data = {solutionQueens: []};
    return fetch(BASEURL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
            query: `
            EigthQueensPuzzle{
                id: '',
                solutionQueens: [],
                v: ,
            }
            `
        }),
    })
    .then((res) => res.json())
    .then(response => console.log('Success:', response))
    .catch(e => console.log("ocurrio un error", e))
}
export default FerchGetPost;