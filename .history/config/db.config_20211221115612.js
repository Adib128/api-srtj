const mongoose = require('mongoose');
console.log(process.env.MONGO_URI);
mongoose.connect('mongodb+srv://Adib:DAASCloud1;;@cluster0.ifw4d.mongodb.net/srtj?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection ; 

module.exports = db ;