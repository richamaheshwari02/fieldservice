const express = require('express')
const Location = require('../models/location')
const router = new express.Router()

router.post('/locations', async (req, res) => {
    const location = new Location(req.body)
    try {
        await location.save()
        res.status(201).send(location)
    } catch(err) {
        res.status(400).send()
    }
})

module.exports = router
