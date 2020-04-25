const express = require('express');
mongoose = require('mongoose');
router = express.Router();
CartController = require('../controller/Cartcontroller');
const { getAllCart, add_New_Cart, remove_one_Cart } = require('../controller/Cartcontroller');
auth = require('../middleware/auth');
router.route('/').get(getAllCart);

router.route('/:ProductId').post(add_New_Cart);

router.route('/:CartId').delete(remove_one_Cart);
module.exports = router;
