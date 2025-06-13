// Importamos el modelo de Mongoose 
const Product = require('../models/product')

// Creamos un objeto controlador
const ProductController = {
    
    //Crear un nuevo producto en la base de datos
    async create(req, res) {
        try {
            const product = await Product.create(req.body)
            res.status(201).send(product)
        } catch (error) {
            console.error(error)
            res
            .status(500)
            .send({ message: 'Ha habido un problema al crear el producto' })
        }
    },

    // Obtener todos los productos de la base de datos
    async getAll(req, res) {
        try {
            const products = await Product.find()
            res.send(products)
        } catch (error) {
            console.error(error)
        }
    },

    // Obtener un producto por su ID
    async getById(req, res) {
        try {
            const product = await Product.findById(req.params._id)
            res.send(product)
        } catch (error) {
            console.error(error)
        }
    },

    // Buscar productos por nombre (parcial, insensible a mayúsculas/minúsculas)
    async getProductsByName(req, res) {
        try {
            const name = new RegExp(req.params.name, 'i')
            
            const products = await Product.find({ name })
            
            res.send(products)

        } catch (error) {
            console.log(error)
        }
    },

    // Actualizar un producto existente por ID
    async update(req, res) {
        try {
            const product = await Product.findByIdAndUpdate(
            req.params._id,
            req.body,
            { new: true }
        )
        res.send({ 
            message: 'product successfully updated', product })
        } catch (error) {
            console.error(error)
        }
    },

    // Eliminar un producto por ID
    async delete(req, res) {
        try {
            const product = await
            Product.findByIdAndDelete(req.params._id)
            
            res.send({ 
                product, message: 'Product deleted' 
            })

        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'there was a problem trying to remove the product',
            })
        }
    }
}

module.exports = ProductController