const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')

//Ruta para crear la bbadd y tabla
router.post('/', ProductController.create)

router.get('/', ProductController.getAll)

router.get('/id/:_id', ProductController.getById)

router.get('/name/:name', ProductController.getProductsByName)

router.delete('/:_id', ProductController.delete)

router.put('/:_id', ProductController.update)

module.exports = router