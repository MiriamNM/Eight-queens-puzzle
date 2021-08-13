const Model = require('./model');

function addSolutionQueen(solutionQueens) {
    const theSolutionQueens = new Model(solutionQueens);
    return theSolutionQueens.save();
}

function getSolutionQueen() {
    return Model.find();
}

module.exports = {
    add: addSolutionQueen,
    list: getSolutionQueen,
}