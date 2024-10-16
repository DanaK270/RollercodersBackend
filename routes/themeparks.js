const express = require('express')

const router = express.Router()
const multer = require('multer')
const path = require('path')
const upload = multer({ dest: path.join(__dirname, '../public/images/') })

router.use(express.urlencoded({ extended: true }))

//controller
const parksCtrl = require('../controllers/themeparks')

//routes
router.get('/view', parksCtrl.parks_view_get)
router.post('/addpark', upload.single('image'), parksCtrl.parks_add_post)
router.get('/delete/:id', parksCtrl.parks_delete)
// router.get('/images/:imageName', parksCtrl.getImage)

module.exports = router
