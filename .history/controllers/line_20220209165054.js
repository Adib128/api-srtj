const Line = require("../models/line.js");

// Returning lines list
exports.listLines = async (req, res, next) => {
  try {
    const lines = await Line.find({}, {trips:0 , stops:0}).sort({lineNumber: 'asc'}).populate("agency");
    res.status(200).send(lines);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Return line information by ID
exports.getLine = async (req, res, next) => {
  try {
    const line = await Line.findById(req.params.id).populate("agency").populate("trips").populate("stops");
    res.status(200).send(line);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Return stops list by line ID
exports.getLineStops = async (req, res, next) => {
  try {
    const line = await Line.findById(req.params.id).populate("stops");
    res.status(200).send(line.stops);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Return trips list by line ID
exports.getLineTrips = async (req, res, next) => {
  try {
    const line = await Line.findById(req.params.id).populate('trips');
    res.status(200).send(line.trips);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Return searching lines list
exports.searchLines = async (req, res, next) => {
  const query = {};
  // Checking if line name sent and adding it to the search Query
  if(req.body.lineName)
  query.lineName = { $regex: '.*' + req.body.lineName + '.*' } ; 
  // Checking if origin sent and adding it to the search Query
  if(req.body.origin)
  query.origin = { $regex: '.*' + req.body.origin + '.*' } ; 
  // Checking if destination sent and adding it to the search Query
  if(req.body.destination)
  query.destination = { $regex: '.*' + req.body.destination + '.*' } ; 

  if(req.body.type)
  query.lineType = req.body.type ; 

  if(req.body.lineNumber)
  query.lineNumber = req.body.lineNumber ; 

  try {
    const lines = await Line.find(query , {trips:0 , stops:0}).sort({lineNumber: 'asc'}).populate("agency");
    res.status(200).send(lines);
  } catch (error) {
    res.status(500).send(error);
  }
};