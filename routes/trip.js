const express = require('express');
const router = express.Router();
const tripController = require('../controllers/trip.js');

/**
 * @swagger
 * tags:
 *   name: Trip
 *   description: Operations about trips
 */

/**
 * @swagger
 * /trips:
 *   get:
 *     summary: Get list of trips
 *     tags: [Trip]
 *     responses:
 *       200:
 *         description: List of trips
 */
router.get('/', tripController.listTrips);

/**
 * @swagger
 * /trips/{id}:
 *   get:
 *     summary: Get trip details by ID
 *     tags: [Trip]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the trip ID
 *     responses:
 *       200:
 *         description: Trip details
 */
router.get('/:id', tripController.getTrip);

module.exports = router ; 