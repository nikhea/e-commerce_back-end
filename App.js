require('dotenv').config();
const express = require('express');
app = express();
morgen = require('morgan');
bodyParser = require('body-parser');
Cors = require('cors');
mongoose = require('mongoose');
ProductsApi = require('./api/routes/products');
CartApi = require('./api/routes/Cart');
UsersApi = require('./api/routes/User');
seedDB = require('./seeds');

// seedDB()
mongoose.connect('mongodb://localhost/new-ecomm-shops', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(Cors());
app.use(morgen('dev'));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin-X-Requested-With, Content-Type, Accept, Authorization');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Headers', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
		return res.status(200).json({});
	}
	next();
});

//Routes which Handle requests
app.use('/api/routes/products', ProductsApi);
app.use('/api/routes/carts', CartApi);
app.use('/api/routes/users', UsersApi);
app.use((req, res, next) => {
	const error = new Error('NOT FOUND ');
	error.status = 404;
	next(error);
});
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});
module.exports = app;
