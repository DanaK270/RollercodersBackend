const express = require('express')

const router = express.Router()

router.use(express.urlencoded({ extended: true }))

//controller
const parksCtrl = require('../controllers/themeparks')

//routes
router.get('/view', parksCtrl.parks_view_get)
router.get('/delete/:id', parksCtrl.parks_delete)

module.exports = router
