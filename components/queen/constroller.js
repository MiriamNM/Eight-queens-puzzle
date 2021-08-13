const store = require('./store');

function addSolutionQueens(solutionQueens) {
    if (!solutionQueens) {
        return Promise.reject('Invalid queen');
    }
    const theSolutionQueen = {
        solutionQueens,
    };
    return store.add(theSolutionQueen);
}

function getSolutionQueens() {
    return store.list();
}

module.exports = {
    addSolutionQueens,
    getSolutionQueens,
}