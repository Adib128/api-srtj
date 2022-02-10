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
    // Route schema relationship Many to One 
    route: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Route",
    },
    // Trips schema relationship One to Many
    trips: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trip",
      },
    ],
    // Trips schema relationship One to Many
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