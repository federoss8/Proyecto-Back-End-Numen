const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true   
    },
    adress: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuario', userSchema);