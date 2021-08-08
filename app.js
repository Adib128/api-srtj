const express = require('express');
const bodyParser = require('body-parser');
const agencyRoute = require('./routes/agency.js');
const lineRoute = require('./routes/line.js');
const stopRoute = require('./routes/stop.js');
<<<<<<< HEAD
const itineraryRoute = require('./routes/itenrary.js');
=======
>>>>>>> 469362630107b133fa7235dc364172faa8b7d16b
const db = require("./config/db.config.js");

const app = express();

app.use(bodyParser.json());

app.use('/agency' , agencyRoute) ; 
app.use('/line' , lineRoute) ; 
app.use('/stop' , stopRoute) ; 
<<<<<<< HEAD
app.use('/itinerary' , itineraryRoute) ; 
=======
>>>>>>> 469362630107b133fa7235dc364172faa8b7d16b

app.listen(process.env.PORT || 3000, console.log('Server running correctly'));