const mongoose = require("mongoose");

// Line schema
const lineSchema = mongoose.Schema(
  {
    lineNumber: Number,
    lineName: String,
    lineType: String,
    origin: String,
    destination: String,
    // Agency schema relationship Many to One
    agency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agency",
    },
    // Route schema relationship
    route: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Route",
    },
    // Agency schema relationship
    trips: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trip",
      },
    ],
    stops: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stop",
      },
    ],
  },
  { versionKey: false }
);

// Exporting Line model
module.exports = mongoose.model("Line", lineSchema);