const mongoose = require('mongoose');
Schema = mongoose.Schema;

const CheckOutSchema = new Schema({
	createdDate: {
		type: Date,
		default: Date.now
	}
});

var CheckOut = mongoose.model('CheckOut', CheckOutSchema);

module.exports = CheckOut;
