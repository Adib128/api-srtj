const mongoose = require("mongoose");

const stopSchema = mongoose.Schema(
  {
    stopNumber: Number,
    stopName: String,
    stopType: String,
    stopPhoto: String,
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
