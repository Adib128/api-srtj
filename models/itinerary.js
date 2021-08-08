const mongoose = require('mongoose');

const itinerarySchema = mongoose.Schema({
    itineraryOrder: Number,
    departureTime: String,
    arrivalTime: String,
    price: Number,
    line: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Line"
    }
});

module.exports = mongoose.model('Itinerary', itinerarySchema);