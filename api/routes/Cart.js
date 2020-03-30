const express = require('express');
mongoose = require('mongoose');
router = express.Router();
CartController = require('../controller/Cartcontroller');

router.route('/').get(CartController.getAllCart);

router.route('/:ProductId').post(CartController.add_New_Cart);

router.route('/:CartId').delete(CartController.remove_one_Cart);
module.exports = router;
