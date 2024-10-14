const express = require('express')

const router = express.Router()

router.use(express.urlencoded({ extended: true }))

//controller
const parksCtrl = require('../controllers/themeparks')

//routes
router.get('/view', parksCtrl.parks_view_get)

module.exports = router
