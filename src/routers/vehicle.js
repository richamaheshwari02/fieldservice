const express = require('express')
const Vehicle = require('../models/vehicle')
const router = new express.Router()

router.post('/vehicles', async (req, res) => {
    const vehicle = new Vehicle(req.body)
    try {
        await vehicle.save()
        res.status(201).send(vehicle)
    } catch(err) {
        res.status(400).send()
    }
})

router.get('/vehicles/:id', async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id)

    await vehicle.populate('driver').execPopulate()
    
     await vehicle.driver.populate('locations').execPopulate()
    const locations = vehicle.driver.locations
   
    res.send({
        vehicle,
        locations
    })
})

module.exports = router