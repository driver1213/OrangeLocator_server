const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    phone: String,
    address: String
});

const locationSchema = new mongoose.Schema({
    name: String,
    info: {
        type: Object,
        infoSchema
    },
    wifiMacAddress: String,
    imgUrl: String,
    category: String,
    latitude: Number,
    longitude: Number
})

module.exports = mongoose.model('Store', locationSchema);