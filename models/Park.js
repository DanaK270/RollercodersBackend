const mongoose = require('mongoose')

const parkSchema = mongoose.Schema(
  {
    name: String,
    countryCode: String,
    parkType: String,
    description: String,
    image: String
  },
  { timestamps: true }
)

module.exports = mongoose.model('Park', parkSchema)
