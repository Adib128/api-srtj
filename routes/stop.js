const express = require('express');
const router = express.Router();
const stopController = require('../controllers/stop.js');

/**
 * @swagger
 * tags:
 *   name: Stop
 *   description: Operations about stops
 */

/**
 * @swagger
 * /stops:
 *   get:
 *     summary: Get list of stops
 *     tags: [Stop]
 *     responses:
 *       200:
 *         description: List of stops
 */
router.get('/', stopController.listStops);

/**
 * @swagger
 * /stops/stop/{id}:
 *   get:
 *     summary: Get stop details by ID
 *     tags: [Stop]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the stop ID
 *     responses:
 *       200:
 *         description: Stop details
 */
router.get('/stop/:id', stopController.getStop);

/**
 * @swagger
 * /stops/nearby?longitude={longitude}&latitude={latitude}:
 *   get:
 *     summary: Get nearby stops list
 *     tags: [Stop]
 *     parameters:
 *       - in: path
 *         name: longitude
 *         schema:
 *           type: string
 *         required: true
 *         description: Longitude
 *       - in: path
 *         name: latitude
 *         schema:
 *           type: string
 *         required: true
 *         description: Latitude
 *     responses:
 *       200:
 *         description: Stop details
 */
router.get('/nearby', stopController.getNearStops);

module.exports = router ; 