const mongoose = require('mongoose');
const dotenv = require('dotenv');

// .env file configuration
dotenv.config();

// Connecting to MongoDB database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection ; 

module.exports = db ;