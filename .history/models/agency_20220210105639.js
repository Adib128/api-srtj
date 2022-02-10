const mongoose = require("mongoose");

// Agency schema
const agencySchema = mongoose.Schema(
  {
    agencyKey: String,
    agencyName: String,
    agencyPhone: Number,
    agencyAddress: String
  },
  { versionKey: false }
);
// Exporting agency schema
module.exports = mongoose.model("Agency", agencySchema);
