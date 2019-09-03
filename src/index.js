const express = require('express')
require('./db/mongoose')
const driverRouter = require('./routers/driver')
const vehicleRouter = require('./routers/vehicle')
const locationRouter = require('./routers/location')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(driverRouter)
app.use(vehicleRouter)
app.use(locationRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



