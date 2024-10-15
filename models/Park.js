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

const Park = mongoose.model('Park', parkSchema)
module.exports = { Park }
