const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    queen: {
        type: String,
        required: true,
    },
});

const model = mongoose.model('Queen', mySchema);

module.exports = model;