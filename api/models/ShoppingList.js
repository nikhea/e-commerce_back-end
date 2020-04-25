const mongoose = require('mongoose');
Schema = mongoose.Schema;

let ShoppingListSchema = new Schema({
	name: {
		type: String,
		require: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	isCompeleted: {
		type: Boolean,
		default: false
	}
});

let ShoppingList = mongoose.model('ShoppingList', ShoppingListSchema);

module.exports = ShoppingList;
