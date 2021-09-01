const Stop = require("../models/stop.js");

exports.listStops = async (req, res, next) => {
  try {
    const stops = await Stop.find({}, { position: 0, equipments: 0 });
    res.status(200).send(stops);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getStop = async (req, res, next) => {
  try {
    const stop = await Stop.findOne({ _id: req.params.id });
    res.status(200).send(stop);
  } catch (error) {
    res.status(500).send(error);
  }
};