const express = require('express')
const app = express()
const PORT = 3001
const { dbConnection } = require('./config/config')

app.use(express.json())
dbConnection()

app.use('/products', require('./routes/product'))

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))