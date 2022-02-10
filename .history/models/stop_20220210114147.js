const mongoose = require("mongoose");

// Stop schema
const stopSchema = mongoose.Schema(
  {
    stopNumber: Number,
    stopName: String,
    stopType: String,
    stopPhoto: String,
    // Enumeration equipments
    equipments: [
      {
        type: String,
        enum: ["Trash", "Light", "Bench", "Access PRM"],
      },
    ],
    location: {
      type: [Number],
    },
    line: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Line",
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Stop", stopSchema);
