const express = require('express');
mongoose = require('mongoose');
router = express.Router();
ProductController = require('../controller/ProductController');
auth = require('../middleware/auth')
router.route('/',)
       .get(ProductController.getAllProducts)
       .post(ProductController.add_New_Products)

router.route('/:ProductId')
          .get(ProductController.get_one_product)
          .delete(ProductController.remove_one_product)
module.exports = router;
