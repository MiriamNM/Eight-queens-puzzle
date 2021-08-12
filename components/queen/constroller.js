const store = require('./store');

function addQueen(queen) {
    if (!queen) {
        return Promise.reject('Invalid queen');
    }
    const theQueen = {
        queen,
    };
    return store.add(theQueen);
}

function getQueen() {
    return store.list();
}

module.exports = {
    addQueen,
    getQueen,
}