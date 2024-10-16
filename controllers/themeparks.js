const axios = require('axios')
const { Park } = require('../models/Park')

exports.parks_view_get = async (req, res) => {
  try {
    // get themeparks data from the API
    const response = await axios.get('https://tp.arendz.nl/parks')
    const dbResponse = await Park.find()
    const parks = [...response.data, ...dbResponse]
    res.json(parks)
    //console.log(parks)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error fetching theme parks')
  }
}

exports.parks_add_post = (req, res) => {
  // Save this data to a database probably
  console.log('BOOK CREATE: ', req.body)
  console.log(req.file)
  try {
    const imageName = req.file.filename
    let parkData = {
      ...req.body,
      image: imageName
    }
    let park = new Park(parkData)
    park.save()
    res.send(park)
  } catch (error) {
    console.error('Error adding park:', error)
    res.status(500).send('Error adding park')
  }
}

exports.parks_delete = async (req, res) => {
  const { id } = req.params
  try {
    await Park.findByIdAndDelete(id)
    res.status(200).send('Park deleted successfully')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error deleting park')
  }
}
