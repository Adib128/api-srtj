const Agency = require("../models/agency.js");

exports.listAgencies = async (req, res, next) => {
  try{
    const agencies = await Agency.find();
    res.status(200).json(agencies);
  } catch (error) {
      res.status(500).send(error);
  }
};

exports.getAgency = async (req, res, next) => {
    try{
      const agency = await Agency.findOne({ _id: req.params.id });
      if (!agency) {
        res.status(404).json({ message: `No agency found with the id: ${req.params.id}`});
      }
      res.status(200).json(agency);
    } catch (error) {
        res.status(500).send(error);
    }
};