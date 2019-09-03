const mongoose = require('mongoose')

const connectionUrl = 'mongodb://127.0.0.1:27017/field-service'

mongoose.connect(connectionUrl, {
    useCreateIndex: true,
    useNewUrlParser:true
})