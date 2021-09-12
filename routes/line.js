const express = require("express");
const router = express.Router();
const lineController = require("../controllers/line.js");

/**
 * @swagger
 * tags:
 *   name: Line
 *   description: Line API
 */

/**
 * @swagger
 * /lines:
 *   get:
 *     summary: Get list of lines
 *     tags: [Line]
 *     responses:
 *       200:
 *         description: List of lines
 */
router.get("/", lineController.listLines);

/**
 * @swagger
 * /lines/{id}:
 *   get:
 *     summary: Get line details by ID
 *     tags: [Line]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the line ID
 *     responses:
 *       200:
 *         description: Line details
 */
router.get("/:id", lineController.getLine);

/**
 * @swagger
 * /lines/{id}/trips:
 *   get:
 *     summary: Get list of trips by line ID
 *     tags: [Line]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the line Id
 *     responses:
 *       200:
 *         description: trips list
 */
 router.get("/:id/trips", lineController.getLineTrips);

/**
 * @swagger
 * /lines/{id}/stops:
 *   get:
 *     summary: Get list of stops by line ID
 *     tags: [Line]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the line Id
 *     responses:
 *       200:
 *         description: stops list
 */
router.get("/:id/stops", lineController.getLineStops);

module.exports = router;
