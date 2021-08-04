const Agency = require("../models/agency.js");

exports.listAgencies = async (req, res, next) => {
  const agencies = await Agency.find();
  res.send(agencies);
};

exports.getAgency = async (req, res, next) => {
    try{
        const agency = await Agency.findOne({ _id: req.params.id });
        res.send(agency);
    } catch (error) {
        res.status(500).send(error);
      }
};