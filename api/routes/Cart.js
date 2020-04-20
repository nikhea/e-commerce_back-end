const express = require('express');
mongoose = require('mongoose');
router = express.Router();
CartController = require('../controller/Cartcontroller');
auth = require('../middleware/auth')
router.route('/').get(auth,CartController.getAllCart);

router.route('/:ProductId').post(auth,CartController.add_New_Cart);

router.route('/:CartId').delete(auth,CartController.remove_one_Cart);
module.exports = router;
