const Agency = require("../models/agency.js");

exports.listAgencies = async (req, res, next) => {
  try{
    const agencies = await Agency.find();
    res.status(200).send(agencies);
  } catch (error) {
      res.status(500).send(error);
  }
};

exports.getAgency = async (req, res, next) => {
    try{
      const agency = await Agency.findOne({ _id: req.params.id });
      res.status(200).send(agency);
    } catch (error) {
      res.status(500).send(error);
    }
};

exports.createAgency = async (req, res, next) => {
  try {
    const agency = new Agency(req.body);
    await agency.save();
    res.status(201).send(agency);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateAgency = async (req, res, next) => {
  try {
    const agency = await Agency.findOneAndUpdate({ _id: req.params.id }, { $set: req.body });
    res.status(200).send(agency);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteAgency = async (req, res, next) => {
  try {
    const agency = await Agency.findByIdAndDelete(req.params.id);
    res.status(200).send(agency);
  } catch (error) {
    res.status(500).send(error);
  }
};