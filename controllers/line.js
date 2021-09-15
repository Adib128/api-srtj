const Line = require("../models/line.js");

exports.listLines = async (req, res, next) => {
  try {
    const lines = await Line.find({}, {trips:0 , stops:0}).sort({lineNumber: 'asc'}).populate("agency");
    res.status(200).send(lines);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchLines = async (req, res, next) => {
  const query = {};
  if(req.body.lineName)
  query.lineName = { $regex: '.*' + req.body.lineName + '.*' } ; 

  if(req.body.origin)
  query.origin = { $regex: '.*' + req.body.origin + '.*' } ; 

  if(req.body.destination)
  query.destination = { $regex: '.*' + req.body.destination + '.*' } ; 

  if(req.body.type)
  query.lineType = req.body.type ; 

  try {
    const lines = await Line.find(query , {trips:0 , stops:0}).sort({lineNumber: 'asc'}).populate("agency");
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
