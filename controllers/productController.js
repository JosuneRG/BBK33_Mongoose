const Product = require('../models/product')

const ProductController = {
    //crear BBDD
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

    //Ver o leer datos de bbdd
    async getAll(req, res) {
        try {
            const products = await Product.find()
            res.send(products)
        } catch (error) {
            console.error(error)
        }
    },

    async getById(req, res) {
        try {
            const product = await Product.findById(req.params._id)
            res.send(product)
        } catch (error) {
            console.error(error)
        }
    },

    async getProductsByName(req, res) {
        try {
            const name = new RegExp(req.params.name, 'i')
            
            const products = await Product.find({ name })
            
            res.send(products)

        } catch (error) {
            console.log(error)
        }
    },

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