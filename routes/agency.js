const express = require('express');
const router = express.Router();
const agencyController = require('../controllers/agency.js');


router.get('/', agencyController.listAgencies);

router.get('/:id', agencyController.getAgency);

router.get('/:id/lines', agencyController.getAgencyLines);

router.post('/', agencyController.createAgency);

router.patch('/:id', agencyController.updateAgency);

router.delete('/:id', agencyController.deleteAgency);

module.exports = router ; 