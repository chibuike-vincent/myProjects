const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product_route');
const mongoose = require('mongoose');
const app = express()
mongoose.connect('mongodb://patrick:patrick12345@ds155833.mlab.com:55833/my_product_app_database', { useNewUrlParser: true, useCreateIndex: true })
.then((res) => console.log('connected to the database', res))
.catch((err) => console.log('failed to connect to database', err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

// const productController = require('./controllers/product_controller')
// app.use('/product', productController.product)
app.use('/products', product)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log( `app is running on port ${port}`))