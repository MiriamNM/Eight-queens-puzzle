const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    solutionQueens: {
        type: Array,
        required: true,
    },
});

const model = mongoose.model('SolutionQueens', mySchema);

module.exports = model;