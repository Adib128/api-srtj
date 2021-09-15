const express = require("express");
const router = express.Router();
const lineController = require("../controllers/line.js");

/**
 * @swagger
 * tags:
 *   name: Line
 *   description: Operations about lines
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
 * /lines/line/{id}:
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
router.get("/line/:id", lineController.getLine);

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

/**
 * @swagger
 * /lines/search:
 *   post:
 *     summary: Search lines
 *     tags: [Line]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lineName:
 *                 type: string
 *                 description: The type of the line
 *               origin:
 *                 type: string
 *                 description: The origin of the line
 *               destination:
 *                 type: string
 *                 description: The destination of the line
 *               type:
 *                 type: string
 *                 description: The type of the line
 *               lineNumber:
 *                 type: integer
 *                 description: The number of the line 
 *     responses:
 *       200:
 *         description: List of searched lines
 */
 router.post("/search", lineController.searchLines);

module.exports = router;
