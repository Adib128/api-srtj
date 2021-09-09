const Agency = require("../models/agency.js");
const Line = require("../models/line.js");
const Itenrary = require("../models/itinerary.js");
const Stop = require("../models/stop.js");
const mongoose = require('mongoose');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
const db = require("../config/db.config.js");

AdminBro.registerAdapter(AdminBroMongoose)

async () => {
const connection = await db ;
const adminBro  = new AdminBro ({
    Databases: [connection],
    rootPath: '/admin',
    resources: [
        { resource: Line, options: { preventAssignment: true } },
        { resource: Agency, options: { preventAssignment: true } },
        { resource: Itenrary, options: { preventAssignment: true } },
        { resource: Stop, options: { preventAssignment: true } },
    ]
  })
  
  const router = AdminBroExpress.buildRouter(adminBro)
  module.exports = router ;
}