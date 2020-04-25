const db = require('../models');

exports.getAllProducts = async (req, res, next) => {
	try {
		const Product = await db.Products.find().select('-__v').exec();
		if (Product) {
			res.status(200).json(Product);
		} else {
			res.status(500).json({ msg: 'Product not found' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ msg: 'Product not found' });
	}
};

exports.add_New_Products = async (req, res, next) => {
	try {
		const Product = new db.Products({
			productName: req.body.productName,
			image: req.body.image,
			cpu: req.body.cpu,
			ram: req.body.ram,
			storage: req.body.storage,
			screen: req.body.screen,
			price: req.body.price,
			description: req.body.description
		});
		console.log(Product);
		const product = await Product.save();

		if (product) {
			res.status(201).json(product);
		} else {
			res.status(500).json({ msg: 'unable to create new Product ' });
		}
	} catch (err) {
		res.status(500).json({ msg: 'unable to create new Product ' });
	}
};

exports.get_one_product = async (req, res, next) => {
	try {
		const id = req.params.ProductId;
		const product = await db.Products.find({ _id: id }).select('-__v').exec();
		if (product) {
			res.status(200).json(product);
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ msg: 'Product not found', err: err });
	}
};

exports.remove_one_product = async (req, res, next) => {
	try {
		const id = req.params.ProductId;
		const product = await db.Products.remove({ _id: id });
		if (product) {
			res.status(200).json({ msg: 'Product deleted' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ msg: 'Product unable to delete', err: err });
	}
};
