const Line = require("../models/line.js");

exports.listLines = async (req, res, next) => {
  try {
    const lines = await Line.find({}, {trips:0 , stops:0}).populate("agency");
    res.status(200).send(lines);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getLine = async (req, res, next) => {
  try {
    const line = await Line.findById(req.params.id).populate("agency").populate("trips").populate("stops");
    res.status(200).send(line);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getLineStops = async (req, res, next) => {
  try {
    const line = await Line.findById(req.params.id).populate("stops");
    res.status(200).send(line.stops);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getLineTrips = async (req, res, next) => {
  try {
    const line = await Line.findById(req.params.id).populate('trips');
    res.status(200).send(line.trips);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createLine = async (req, res, next) => {
  try {
    const line = new Line(req.body);
    await line.save();
    res.status(201).send(line);
  } catch (error) {
    res.status(500).send(error);
  }
};
