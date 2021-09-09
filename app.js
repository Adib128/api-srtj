const express = require('express');
const bodyParser = require('body-parser');
const agencyRoute = require('./routes/agency.js');
const lineRoute = require('./routes/line.js');
const stopRoute = require('./routes/stop.js');
const tripRoute = require('./routes/trip.js');
const db = require("./config/db.config.js");
const Agency = require("./models/agency.js");
const Line = require("./models/line.js");
const Trip = require("./models/trip.js");
const Stop = require("./models/stop.js");
const mongoose = require('mongoose');
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
 
const app = express();

app.use(bodyParser.json());

app.use('/agency' , agencyRoute) ; 
app.use('/lines' , lineRoute) ; 
app.use('/stops' , stopRoute) ; 
app.use('/trips' , tripRoute) ; 

AdminBro.registerAdapter(AdminBroMongoose)

const run = async () => {
    const connection = await mongoose.connect('mongodb+srv://Adib:DAASCloud1;;@cluster0.ifw4d.mongodb.net/srtj?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
const adminBro  = new AdminBro ({
    Databases: [connection],
    rootPath: '/admin',
    resources: [
        { resource: Line, options: { preventAssignment: true } },
        { resource: Agency, options: { preventAssignment: true } },
        { resource: Trip, options: { preventAssignment: true } },
        { resource: Stop, options: { preventAssignment: true } },
    ]
  })
  
  const router = AdminBroExpress.buildRouter(adminBro)
  app.use(adminBro.options.rootPath, router)
  

app.listen(process.env.PORT || 3000, console.log('Server running correctly'));
}
run();