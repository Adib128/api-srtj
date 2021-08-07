const mongoose = require('mongoose');

const lineSchema = mongoose.Schema({
    lineNumber: Number,
    lineName: String,
    lineType: String,
    agency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agency"
    } 
});

module.exports = mongoose.model('Line', lineSchema);