const Trip = require("../models/trip.js");

// Return routes list by line ID
exports.listTrips = async (req, res, next) => {
  try {
    const trips = await Trip.find().populate({
      path: "line",
      select: ["_id", "lineNumber", "lineName"],
    });
    res.status(200).send(trips);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTrip = async (req, res, next) => {
  try {
    const trip = await Trip.findOne({ _id: req.params.id })
    .populate({
      path: "line",
      select: ["_id", "lineNumber", "lineName"],
    });
    res.status(200).send(trip);
  } catch (error) {
    res.status(500).send(error);
  }
};
