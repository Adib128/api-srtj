const Agency = require("../models/agency.js");
const Line = require("../models/line.js");

// Returning agencies list
exports.listAgencies = async (req, res, next) => {
  try {
    const agencies = await Agency.find();
    res.status(200).send(agencies);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Return agency informations by ID
exports.getAgency = async (req, res, next) => {
  try {
    const agency = await Agency.findOne({ _id: req.params.id });
    res.status(200).send(agency);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get lines list by agency with ID
exports.getAgencyLines = async (req, res, next) => {
  try {
    const lines = await Line.find(
      { agency: req.params.id },
      { trips: 0, stops: 0 }
    );
    res.status(200).send(lines);
  } catch (error) {
    res.status(500).send(error);
  }
};
