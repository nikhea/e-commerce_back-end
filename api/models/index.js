const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connection
	.once('open', () => {
		console.log('mongoose connected');
	})
	.on('error', () => {
		// console.log('Connectin error',error);
		console.log('Connectin error', 'error');
	});

// mongoose.connect(
// 	// `mongodb+srv://imonikheaugbodaga:${process.env
// 	// .MoNGO_ATLAS_PW}@@vue-ecommerce-app-k8poc.mongodb.net/test?retryWrites=true&w=majority`,
// 	// `mongodb+srv://imonikheaugbodaga:Congratulations@@vue-ecommerce-app-k8poc.mongodb.net/test?retryWrites=true&w=majority`,
// 	`
// 	mongodb+srv://imonikheaugbodaga:Congratulations@vue-ecommerce-app-k8poc.mongodb.net/test?retryWrites=true&w=majority
// 	`,
// 	{
// 		keepAlive: true,
// 		useNewUrlParser: true,
// 		// useMongoClient: true,
// 		useUnifiedTopology: true
// 	}
// );

module.exports.Products = require('./Products');
module.exports.Users = require('./User');
module.exports.Carts = require('./Cart');
module.exports.CheckOuts = require('./Checkout');
