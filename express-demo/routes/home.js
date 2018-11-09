const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
  res.render('index', {title:"my express Router", message: 'Hello'})
});

module.exports = Router;