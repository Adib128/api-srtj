const mongoose = require("mongoose");

// Route schema
const tripSchema = mongoose.Schema(
  {
    tripOrder: Number,
    departureTime: String,
    arrivalTime: String,
    price: Number,
    line: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Line",
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Trip", tripSchema);
