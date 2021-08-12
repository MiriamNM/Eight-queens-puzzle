const Model = require('./model');

function addQueen(queen) {
    const myQueen = new Model(queen);
    return myQueen.save();
}

function getQueen() {
    return Model.find();
}

module.exports = {
    add: addQueen,
    list: getQueen,
}