const mongoose = require('mongoose');
const dotenv = require('dotenv');

// .env file configuration
dotenv.config();

// Create MongoDB database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Database connection
const db = mongoose.connection ; 

module.exports = db ;