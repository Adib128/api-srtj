const mongoose = require("mongoose");

// Agency schema
const routeSchema = mongoose.Schema({
  routeNumber: Number,
  routeName: String,
  routeType: Number,
});

module.exports = mongoose.model("Route", routeSchema);
