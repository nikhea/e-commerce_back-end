const mongoose = require('mongoose');
Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	},
	nickname: {
		type: String,
		require: true
	},
	password: {
		type: String,
		require: true
	},
	createdDate: {
		type: Date,
		default: Date.now
	}
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
