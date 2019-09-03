const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    type: {
        type: String,
        trim: true
    },
    registrationNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    }
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

module.exports = Vehicle