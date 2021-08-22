// import react from 'react';

const FunctionEigthQueens = (n) => {
    /*Restrictions
    One queen per grid
    One queen per row
    One queen per diagonal
    # row + #column === c / queen && queens (j) + j == in 2 different indices of j.
    # row - #column === c / queen && queens (j) - j == in 2 different indices of j.
    The queens are on the same ascending diagonal from left to right.
    The queens are on the same downward diagonal.
    Values of queens (j) + j are all different for j
    Values of queens (j) - j are all different for j
    */
    
    let playSite = function (resultArr, arr) {
        for (let i = 0; i < resultArr.length; i++) {
            if (resultArr[i][0] === arr[0] || resultArr[i][1] === arr[1]) return false;
            if (Math.abs((resultArr[i][0] - arr[0]) / (resultArr[i][1] - arr[1])) === 1) return false;
        }
        return true;
    };

    let buildRes = function (arr) {
        let resultArr = [];
        for (let i = 0; i < arr.length; i++) {
            resultArr[i] = '';
            for (let j = 0; j < arr.length; j++) {
                resultArr[i] += (arr[i][1] === j ? '|♛|' : '|_|');
            }
        }
        return resultArr;
      };
    
    const recursiveFunction = (resultArr, arr, n, index) => {
        for (let i = index; i < n; i++) {
            if (arr.length !== i) return;
                for (let j = 0; j < n; j++) {
                    if (playSite(arr, [i, j])) {
                        arr.push([i, j]);
                        recursiveFunction(resultArr, arr, n, index + 1);
                        if (arr.length === n) resultArr.push(buildRes(arr));
                        arr.pop();
                    }
            }
        }
    }
    
    const solveNQueens = function(n) {
        let res = [];
        const index = 0;
        if (n === 1 || n >= 4) recursiveFunction(res, [], n, index);
        return console.log(res);
    };
    
    return solveNQueens(n);

}
export default FunctionEigthQueens;

