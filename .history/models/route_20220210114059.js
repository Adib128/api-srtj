const mongoose = require("mongoose");

// Route schema
const routeSchema = mongoose.Schema({
  routeNumber: Number,
  routeName: String,
  routeType: Number,
});

module.exports = mongoose.model("Route", routeSchema);
