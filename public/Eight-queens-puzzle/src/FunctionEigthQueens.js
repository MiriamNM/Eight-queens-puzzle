// import react from 'react';

const FunctionEigthQueens = (n) => {
    //playSite put the rows and columns
    let playSite = function (resultArr, arr) {
        for (let i = 0; i < resultArr.length; i++) {
            if (resultArr[i][0] === arr[0] || resultArr[i][1] === arr[1]) return false;
            if (Math.abs((resultArr[i][0] - arr[0]) / (resultArr[i][1] - arr[1])) === 1) return false;
        }
        return true;
    };

    //buildPlay fill space in the rows.
    let buildPlay = function (arr) {
        let resultArr = [];
        for (let i = 0; i < arr.length; i++) {
            resultArr[i] = '';
            for (let j = 0; j < arr.length; j++) {
                resultArr[i] += (arr[i][1] === j ? '|♛|' : '|_|');
            }
        }
        return resultArr;
      };
    
    //recursiveFunction It is the recursive function that links rows, columns and position of queens or spaces.
    const recursiveFunction = (resultArr, arr, n, index) => {
        for (let i = index; i < n; i++) {
            if (arr.length !== i) return;
                for (let j = 0; j < n; j++) {
                    if (playSite(arr, [i, j])) {
                        arr.push([i, j]);
                        recursiveFunction(resultArr, arr, n, index + 1);
                        if (arr.length === n) resultArr.push(buildPlay(arr));
                        arr.pop();
                    }
            }
        }
    }

    //solveNQueens join all.
    const solveNQueens = function(n) {
        let res = [];
        const index = 0;
        if (n === 1 || n >= 4) recursiveFunction(res, [], n, index);
        return console.log(res);
    };
    
    return solveNQueens(n);

}
export default FunctionEigthQueens;

