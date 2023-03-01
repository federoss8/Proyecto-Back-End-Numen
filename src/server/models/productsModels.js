const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type:String,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Producto', productSchema);