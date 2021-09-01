const express = require('express');
const bodyParser = require('body-parser');
const agencyRoute = require('./routes/agency.js');
const lineRoute = require('./routes/line.js');
const stopRoute = require('./routes/stop.js');
const itineraryRoute = require('./routes/itenrary.js');
const db = require("./config/db.config.js");

const app = express();

app.use(bodyParser.json());

app.use('/agency' , agencyRoute) ; 
app.use('/lines' , lineRoute) ; 
app.use('/stop' , stopRoute) ; 
app.use('/itinerary' , itineraryRoute) ; 

app.listen(process.env.PORT || 3000, console.log('Server running correctly'));