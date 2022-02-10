const mongoose = require("mongoose");

// Trip schema
const tripSchema = mongoose.Schema(
  {
    tripOrder: Number,
    departureTime: String,
    arrivalTime: String,
    price: Number,
    // Line schema relationship Many to One   
    line: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Line",
    },
  },
  { versionKey: false }
);

// Exporting Trip model
module.exports = mongoose.model("Trip", tripSchema);
