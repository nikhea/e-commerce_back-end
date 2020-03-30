const mongoose = require('mongoose');

Product = require('../models/Products');

const CartSchema = mongoose.Schema({
	
	products: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Product',
		require: true
	}],
	quantity: { type: Number, default: 1 }
});

var Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
