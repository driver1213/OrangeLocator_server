const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: String,
    info: {
        phone: String,
        address: String
    },
    wifiMacAddress: String,
    imgUrl: String,
    category: String,
    latitude: Number,
    longitude: Number
})

module.exports = mongoose.model('Store', locationSchema);