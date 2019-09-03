const mongoose = require('mongoose')


const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    profilePicture: {
        type: Buffer
    },
    mobileNo: {
        type: Number,
        required: true,
        unique: true
    },
    lastLogin: {
        type: Date,      
        default: Date.now
    },
    device: {
        os: {
            type: String,
            trim: true
        },
        version: {
            type: String
        }
    },
    currentLocation: {
        type: String
    }
}, {
    timestamps: true
})

driverSchema.virtual('locations', {
    ref: 'Location',
    localField: '_id',
    foreignField: 'driver'
})

const Driver = mongoose.model('Driver', driverSchema)

module.exports = Driver