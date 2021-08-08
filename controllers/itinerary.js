const Itenrary = require("../models/itinerary.js");

exports.listItineraries = async (req, res, next) => {
  try{
    const itineraries = await Itenrary.find().populate('line');
    res.status(200).send(itineraries);
  } catch (error) {
      res.status(500).send(error);
  }
};

exports.getItenrary = async (req, res, next) => {
    try{
      const itenrary = await Itenrary.findOne({ _id: req.params.id }).populate('line');
      res.status(200).send(itenrary);
    } catch (error) {
      res.status(500).send(error);
    }
};

exports.createItenrary = async (req, res, next) => {
    try {
      const itenrary = new Itenrary(req.body);
      await itenrary.save();
      res.status(201).send(itenrary);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  

