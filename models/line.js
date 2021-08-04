const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: String
});

module.exports = mongoose.model('quote', quoteSchema);