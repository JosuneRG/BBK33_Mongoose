const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')

//Crear un nuevo producto
//http://localhost:3000/products
router.post('/', ProductController.create)

//Obtener todos los productos
//http://localhost:3000/products
router.get('/', ProductController.getAll)

//Obtener un producto por su ID
//http://localhost:3000/products/id/123abc
router.get('/id/:_id', ProductController.getById)

//Buscar productos por nombre (parcial)
//http://localhost:3000/products/name/Laptop
router.get('/name/:name', ProductController.getProductsByName)

//Eliminar un producto por ID
// http://localhost:3000/products/123abc
router.delete('/:_id', ProductController.delete)

//Actualizar un producto por ID
//http://localhost:3000/products/123abc
router.put('/:_id', ProductController.update)

module.exports = router