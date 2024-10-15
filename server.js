const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// Require and Initialize dotenv
require('dotenv').config()

// PORT Configuration
const PORT = process.env.PORT

// Initialize Express
const app = express()

app.use(cors())

const db = require('./config/db')

// Import Routes
const parksRouter = require('./routes/themeparks')

// Mount Routes
app.use('/themeparks', parksRouter)

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`)
})
