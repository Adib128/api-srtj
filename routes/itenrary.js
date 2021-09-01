const express = require('express');
const router = express.Router();
const itineraryController = require('../controllers/itinerary.js');

router.post('/', itineraryController.createItenrary);

router.get('/', itineraryController.listItineraries);

router.get('/:id', itineraryController.getItenrary);

module.exports = router ; 