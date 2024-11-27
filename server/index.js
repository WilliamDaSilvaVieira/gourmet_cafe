const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const products = require('./routes/api/products')
const final_price = require('./routes/api/final_price')

app.use('/api/products', products);
app.use('/api/final_price', final_price);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
