const db = require('../models');

exports.getAllCart = async (req, res, next) => {
	try {
		const Cart = await db.Carts
			.find()
			.populate('products') // .select('Product')
			.exec();

		if (Cart) {
			res.status(200).json(Cart);
		} else {
			res.status(500).json({ msg: 'Nothing in found' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ msg: ' Nothing in Cart' });
	}

};

exports.add_New_Cart = async (req, res, next) => {

	const id = req.params.ProductId;

	try {
		const Products = await db.Products.findById(id);
		if (Products) {
			let cart = {};
			cart.quantity = req.body.quantity;
			const Cart = await db.Carts.create(cart);
			if (Cart) {
				// const merged = Products.carts.push(Cart)
				// res.json(Products)
				Cart.products.push(Products);
				// Products.carts.push(Cart);
				// Products.save()
				Cart.save()
				res.json(Cart);
			} else {
				console.log(err);
				res.status(500).json({ error: err });
			}
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: err });
	}
};

exports.remove_one_Cart = async (req, res, next) => {
	const id = req.params.CartId;

	try {
		const cart = await db.Carts.remove({ _id: id });
		if (cart) {
			res.status(200).json({ msg: 'Cart has been deleted' });
		} else {
			res.status(500).json({ msg: 'cart unable to delete' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ msg: 'Cart has been deleted', err: err });
	}
	res.json('deleted');
};
