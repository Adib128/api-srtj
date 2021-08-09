const mongoose = require('mongoose');

const lineSchema = mongoose.Schema({
    lineNumber: Number,
    lineName: String,
    lineType: String,
    origin: String,
    destination: String,
    agency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agency"
    },
    itineraries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Itinerary"
    }],
    stops: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stop"
    }],  
});

module.exports = mongoose.model('Line', lineSchema);