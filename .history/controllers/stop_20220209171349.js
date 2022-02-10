const Stop = require("../models/stop.js");

// Returning stops list
exports.listStops = async (req, res, next) => {
  try {
    const stops = await Stop.find({}, { position: 0, equipments: 0 });
    res.status(200).send(stops);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Return stop information by ID
exports.getStop = async (req, res, next) => {
  try {
    const stop = await Stop.findOne({ _id: req.params.id });
    res.status(200).send(stop);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Return Near by stop by position (longitude and latitude)
exports.getNearStops = async (req, res, next) => {
  try {
    // Executing query of near by stops 
    const stops = await Stop.find({
      location: {
        $nearSphere: {
          // Specifying point by longitude and latitude
          $geometry: {
            type: "Point",
            coordinates: [req.query.longitude, req.query.latitude],
          },
          // Specifying maximum distance
          $maxDistance: 10000,
        },
      },
    });
    res.status(200).send(stops);
  } catch (error) {
    res.status(500).send(error);
  }
};
