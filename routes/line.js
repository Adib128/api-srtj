const express = require('express');
const router = express.Router();
const lineController = require('../controllers/line.js');

router.get('/', lineController.listLines);

router.get('/:id', lineController.getLine);

router.get('/:id/stops', lineController.getLineStops);

router.get('/:id/trips', lineController.getLineTrips);

router.post('/', lineController.createLine);

module.exports = router ; 