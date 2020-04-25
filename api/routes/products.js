const express = require('express');
mongoose = require('mongoose');
router = express.Router();
ProductController = require('../controller/ProductController');
const {
	getAllProducts,
	add_New_Products,
	get_one_product,
	remove_one_product
} = require('../controller/ProductController');
auth = require('../middleware/auth');
router.route('/').get(getAllProducts).post(add_New_Products);

router.route('/:ProductId').get(get_one_product).delete(remove_one_product);
module.exports = router;
