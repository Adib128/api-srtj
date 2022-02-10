const mongoose = require("mongoose");

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
