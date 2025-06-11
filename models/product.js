const mongoose = require('mongoose')

// ✅ PRIMERO se declara el schema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
})

// ✅ DESPUÉS puedes usarlo, como aquí con .index
ProductSchema.index({
  name: 'text',
  description: 'text',
})

module.exports = mongoose.model('Product', ProductSchema)
