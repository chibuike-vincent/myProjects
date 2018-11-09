const express = require('express');
const router = express.Router();

const productcontroller = require('../controllers/product_controller');


router.get('/allproduct', productcontroller.allproduct)
router.get('/test', productcontroller.test);
router.post('/create', productcontroller.product_create);
router.get('/:id', productcontroller.product_details);
router.put('/:id/update', productcontroller.product_update);
router.delete('/:id/delete', productcontroller.product_delete);


module.exports = router;