const mongoose = require('mongoose');

const favListSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        }
})

module.exports = mongoose.model('Fav_List', favListSchema);