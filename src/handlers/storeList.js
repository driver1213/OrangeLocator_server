const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()

const Store = require("../models/Store");

router.get('/stores', (req, res) => {
    //const stores = await Store.find({ userId: req.user._id });
    console.log("Looking for stores...")
    Store.find().exec().then(data => {
        console.log("Found the stores")
        console.log(data)
        res.status(200).json({message: "Found the stores", data: data})
    })
    .catch(err => console.error(err));
});

router.post('/stores', (req, res) => {

    let newStore = new Store({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        info: {
            phone: req.body.phone,
            address: req.body.address
        },
        wifiMacAddress: req.body.wifiMacAddress,
        imgUrl: req.body.imgUrl,
        category: req.body.category,
        latitude: req.body.latitude,
        longitude: req.body.longitude
            
        
    })

    newStore.save().then(result => {
        console.log(result)
        res.status(201).json({message: "Made new store", createdStore: result})
    })
    .catch(err => console.error(err))

});

module.exports = router;

