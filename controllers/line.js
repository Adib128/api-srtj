const Line = require("../models/line.js");

exports.listLines = async (req, res, next) => {
    try{
      const lines = await Line.find().populate('agency').populate('itineraries');
      res.status(200).send(lines);
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  exports.getLine = async (req, res, next) => {
      try{
        const line = await Line.findOne({ _id: req.params.id }).populate('agency').populate('itineraries').populate('stops');
        res.status(200).send(line);
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
  