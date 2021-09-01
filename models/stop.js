const mongoose = require("mongoose");

const stopSchema = mongoose.Schema(
  {
    stopNumber: Number,
    stopName: String,
    stopType: String,
    stopPhoto: String,
    equipments: [{ type: String }],
    position: {
      type: {
        type: String,
        enum: ["Point"],
      },
      cordinates: {
        type: [Number],
      },
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Stop", stopSchema);
