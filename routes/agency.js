const express = require('express');
const router = express.Router();
const agencyController = require('../controllers/agency.js');


router.get('/', agencyController.listAgencies);

router.get('/:id', agencyController.getAgency);

module.exports = router ; 