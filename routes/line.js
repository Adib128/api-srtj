const express = require('express');
const router = express.Router();
const lineController = require('../controllers/line.js');

router.get('/', lineController.listLines);

router.get('/:id', lineController.getLine);

router.post('/', lineController.createLine);

module.exports = router ; 