const express = require('express');
const router = express.Router();
const routeController = require('../controllers/route.js');

/**
 * @swagger
 * tags:
 *   name: Route
 *   description: Operations about routes
 */

/**
 * @swagger
 * /routes:
 *   get:
 *     summary: Get list of routes
 *     tags: [Route]
 *     responses:
 *       200:
 *         description: routes list
 */
router.get('/', routeController.listRoutes);

/**
 * @swagger
 * /routes/{id}:
 *   get:
 *     summary: Get route details by ID
 *     tags: [Route]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the route Id
 *     responses:
 *       200:
 *         description: route information
 */
router.get('/:id', routeController.getRoute);

/**
 * @swagger
 * /routes/{id}/lines:
 *   get:
 *     summary: Get list of lines by route ID
 *     tags: [Route]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the route ID
 *     responses:
 *       200:
 *         description: Route lines list
 */
router.get('/:id/lines', routeController.getRouteLines);

module.exports = router ; 