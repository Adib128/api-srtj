const mongoose = require('mongoose');

const lineSchema = mongoose.Schema({
    lineNumber: Number,
    lineName: String,
    lineType: String,
    agency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agency"
    },
    itineraries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Itinerary"
    }] 
});

module.exports = mongoose.model('Line', lineSchema);