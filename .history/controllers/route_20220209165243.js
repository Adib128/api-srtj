const Route = require("../models/route.js");
const Line = require("../models/line.js");

// Returning routes list
exports.listRoutes = async (req, res, next) => {
  try {
    const routes = await Route.find();
    res.status(200).send(routes);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Return route information by ID
exports.getRoute = async (req, res, next) => {
  try {
    const route = await Route.findOne({ _id: req.params.id });
    res.status(200).send(route);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getRouteLines = async (req, res, next) => {
  try {
    const lines = await Line.find(
      { route: req.params.id },
      { trips: 0, stops: 0 }
    );
    res.status(200).send(lines);
  } catch (error) {
    res.status(500).send(error);
  }
};
