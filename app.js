const express = require('express');
const bodyParser = require('body-parser');
const agencyRoute = require('./routes/agency.js');
const db = require("./db.js");

const app = express();

app.use(bodyParser.json());

app.use('/agency' , agencyRoute) ; 

app.listen(process.env.PORT || 3000, console.log('Server running correctly'));