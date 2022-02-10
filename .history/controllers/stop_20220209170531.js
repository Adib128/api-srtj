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

exports.getNearStops = async (req, res, next) => {
  try {
    const stops = await Stop.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: "Point",
            coordinates: [req.query.longitude, req.query.latitude],
          },
          $maxDistance: 10000,
        },
      },
    });
    res.status(200).send(stops);
  } catch (error) {
    res.status(500).send(error);
  }
};
