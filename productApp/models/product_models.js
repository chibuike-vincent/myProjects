const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let productSchema = new Schema({
  category: {
    type:String,
    required: true,
    max: 100
  },
  name: {
    type: String,
    required: true,
    max: 100
  },
  price: {
    type: Number
  },
  date_added: {
    type: Date
  }
});

module.exports = mongoose.model('product', productSchema)