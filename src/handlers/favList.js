const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()

const Fav_List = require("../models/Fav_List");

router.get('/fav_lists', (req, res) => {
    //const stores = await Store.find({ userId: req.user._id });
    console.log("Looking for fav_lists...")
    Fav_List.find().exec().then(data => {
        console.log("Found the fav_lists")
        console.log(data)
        res.status(200).json({message: "Found the fav_lists", data: data})
    })
    .catch(err => console.error(err));
});

router.post('/fav_lists', (req, res) => {

    let newFav_List = new Fav_List({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address
    })

    newFav_List.save().then(result => {
        console.log(result)
        res.status(201).json({message: "Made new fav_lists", createdStore: result})
    })
    .catch(err => console.error(err))

});

module.exports = router;

