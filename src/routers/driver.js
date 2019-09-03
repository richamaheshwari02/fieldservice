const express = require('express')
const Driver = require('../models/driver')
const router = new express.Router()


router.post('/drivers', async (req, res) => {
    const driver = new Driver(req.body)
    try {
        await driver.save()
        res.status(201).send(driver)
    } catch(err) {
        console.log(err)
        res.status(400).send()
    }
})

// /drivers?name=Bob
// /drivers?location=Melton,SOuth Melbourne
router.get('/drivers', async (req, res) => {

    const match = {}
    if(req.query.name) {
        match.name = { $regex: '.*' +  req.query.name.trim() + '.*' }
    }    
    if(req.query.location) {
        match.currentLocation = { $regex: '.*' +  req.query.location.trim() + '.*' }
    }

    try {
        const drivers = await Driver.find(match)
        res.send(drivers)
    } catch(err) {
        res.status(400).send()
    }
})

// /drivers/:id/location
// /drivers/:id/location?type=history
router.get('/drivers/:id/location', async (req, res) => {
    const options = {
        limit: 1,
        sort : {
            time: -1
        }
    }
    if(req.query.type) {
         if(req.query.type === 'history') {
             options.limit = 20
         }
    }
   
    try {
       const driver = await Driver.findById(req.params.id)
       await driver.populate({
           path: 'locations',
           options
        }).execPopulate()

       res.send({
           driver,
           location: driver.locations
       })
    } catch(err) {
        res.status(400).send(err)
    }
})

module.exports = router