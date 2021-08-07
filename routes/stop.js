const express = require('express');
const router = express.Router();
const stopController = require('../controllers/stop.js');

router.get('/', stopController.listStops);
router.get('/:id', stopController.getStop);

module.exports = router ; 