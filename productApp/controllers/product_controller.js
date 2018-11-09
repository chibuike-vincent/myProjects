
const product = require('../models/product_models');

exports.test = (req,res) => {
  res.send('Greetings from the Test controller');
};

exports.product_create = (req, res, next) => {
  let products = new product({
    category: req.body.category,
    name: req.body.name,
    price: req.body.price,
    date_added: req.body.date_added
  });
  products.save((err) => {
    if(err){
      return next(err);
    }
    res.send('product created successfully')
  });
};

exports.allproduct = (req, res, next) => {
  product.find().then(
    (data) => res.json(data)
  ).catch(err => res.send(err))
}

exports.product_details = (req,res, next) => {
  product.findById(req.params.id, (err, product) => {
    if(err) {
      console.log(err)
      return next(err);
    }
    res.send(product)
    
  });
};

exports.product_update = (req,res) => {
  product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, product) => {
    if(err){
      return next(err);
    }
    res.send('product updated')
  });
};

exports.product_delete = (req,res) => {
  product.findByIdAndRemove(req.params.id, (err,product) => {
    if(err){
      return next(err)
    };
    res.send('product deleted')
  });
};

