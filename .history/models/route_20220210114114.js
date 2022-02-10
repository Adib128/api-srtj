const mongoose = require("mongoose");

// Route schema
const routeSchema = mongoose.Schema({
  routeNumber: Number,
  routeName: String,
  routeType: Number,
});

// Exporting route model
module.exports = mongoose.model("Route", routeSchema);
