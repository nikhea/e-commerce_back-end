const mongoose = require('mongoose');
Schema = mongoose.Schema;

const ProductSchema = new Schema({
	productName: {
		type: String,
		require: true
	},
	image: {
		type: String,
		require: true
	},
	cpu: {
		type: String,
		require: true
	},
	ram: {
		type: String,
		require: true
	},
	storage: {
		type: String,
		require: true
	},
	screen: {
		type: String,
		require: true
	},
	price: {
		type: Number,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	carts:[ {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Cart',
		require: true
	}],
	createdDate: {
		type: Date,
		default: Date.now
	}
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
