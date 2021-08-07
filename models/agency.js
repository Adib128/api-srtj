const mongoose = require('mongoose');

const agencySchema = mongoose.Schema({
    agencyKey: String,
    agencyName: String
});

module.exports = mongoose.model('Agency', agencySchema);