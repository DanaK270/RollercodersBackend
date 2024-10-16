const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const path = require('path')

// PORT Configuration
const PORT = process.env.PORT

// Initialize Express
const app = express()

app.use(cors())
app.use('/images', express.static(path.join(__dirname, '/public/images')))

const db = require('./config/db')

// Import Routes
const parksRouter = require('./routes/themeparks')

// CORS Configuration
app.use(cors())

// Mount Routes (after CORS)
app.use('/themeparks', parksRouter)

// Start server
app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`)
})
