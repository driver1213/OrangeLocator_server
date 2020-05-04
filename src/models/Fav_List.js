const mongoose = require('mongoose');

const favListSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String
})

module.exports = mongoose.model('Fav_List', favListSchema);