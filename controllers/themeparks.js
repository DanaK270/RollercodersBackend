const axios = require('axios')

exports.parks_view_get = async (req, res) => {
  try {
    // get themeparks data from the API
    const response = await axios.get('https://tp.arendz.nl/parks')
    const parks = response.data
    res.json(parks)
    //console.log(parks)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error fetching theme parks')
  }
}
