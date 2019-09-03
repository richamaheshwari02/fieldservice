const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
        trim: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver',
        required: true
    }
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location