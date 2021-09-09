const mongoose = require("mongoose");

const lineSchema = mongoose.Schema(
  {
    lineNumber: Number,
    lineName: String,
    lineType: String,
    origin: String,
    destination: String,
    agency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agency",
    },
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

module.exports = mongoose.model("Line", lineSchema);