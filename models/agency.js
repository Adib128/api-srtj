const mongoose = require("mongoose");

const agencySchema = mongoose.Schema(
  {
    agencyKey: String,
    agencyName: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Agency", agencySchema);
