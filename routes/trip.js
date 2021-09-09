const express = require('express');
const router = express.Router();
const tripController = require('../controllers/trip.js');

router.post('/', tripController.createTrip);

router.get('/', tripController.listTrips);

router.get('/:id', tripController.getTrip);

module.exports = router ; 