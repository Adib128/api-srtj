const express = require('express');
const router = express.Router();
const agencyController = require('../controllers/agency.js');

/**
 * @swagger
 * tags:
 *   name: Agency
 *   description: Agency API
 */

/**
 * @swagger
 * /agencies:
 *   get:
 *     summary: Get list of agencies
 *     tags: [Agency]
 *     responses:
 *       200:
 *         description: agencies list
 */
router.get('/', agencyController.listAgencies);

/**
 * @swagger
 * /agencies/{id}:
 *   get:
 *     summary: Get agency details by ID
 *     tags: [Agency]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the agency Id
 *     responses:
 *       200:
 *         description: agency information
 */
router.get('/:id', agencyController.getAgency);

/**
 * @swagger
 * /agencies/{id}/lines:
 *   get:
 *     summary: Get list of lines by agency ID
 *     tags: [Agency]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the agency Id
 *     responses:
 *       200:
 *         description: agency lines list
 */
router.get('/:id/lines', agencyController.getAgencyLines);

module.exports = router ; 