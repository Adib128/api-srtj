const express = require('express');
const bodyParser = require('body-parser');
const agencyRoute = require('./routes/agency.js');
const lineRoute = require('./routes/line.js');
const db = require("./config/db.config.js");

const app = express();

app.use(bodyParser.json());

app.use('/agency' , agencyRoute) ; 
app.use('/line' , lineRoute) ; 

app.listen(process.env.PORT || 3000, console.log('Server running correctly'));