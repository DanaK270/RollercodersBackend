const express = require('express')

// Require and Initialize dotenv
require('dotenv').config()

// PORT Configuration
const PORT = process.env.PORT

// Initialize Express
const app = express()

// Import Routes
const parksRouter = require('./routes/themeparks')

// Mount Routes
app.use('/themeparks', parksRouter)

app.listen(PORT, () => {
  console.log(`Blog App is running on PORT ${PORT}`)
})
