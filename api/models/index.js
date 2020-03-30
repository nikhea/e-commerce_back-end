const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/article_2_fortune', {
	keepAlive: true,
	useNewUrlParser: true,
	// useMongoClient: true,
	useUnifiedTopology: true,
	useNewUrlParser: true
});

mongoose.connection
	.once('open', () => {
		console.log('mongoose connected');
	})
	.on('error', () => {
		// console.log('Connectin error',error);
		console.log('Connectin error');
    });
    
module.exports.Products = require('./Products');
module.exports.Users = require('./User');
module.exports.Carts= require('./Cart');
module.exports.CheckOuts= require('./Checkout');