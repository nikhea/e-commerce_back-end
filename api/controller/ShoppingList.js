const db = require('../models');

exports.getAllList = async (req, res, next) => {
	try {
		const ShoppingList = await db.ShoppingList
			.find()
			// .select('name isCompeleted _id')
			.select('-__v')
			.exec();

		// .sort({ date: -1 });

		if (ShoppingList) {
			res.status(200).json(ShoppingList);
		} else {
			res.status(500).json({ msg: 'No Item in List' });
		}
	} catch (error) {
		res.status(500).json({ msg: 'No Item in List' });
	}
};

exports.UpdateShoppingList = async (req, res, next) => {
	try {
		const ShoppingList = new db.ShoppingList({
			name: req.body.name
		});

		const shoppingList = await ShoppingList.save();
		if (shoppingList) {
			res.status(200).json(shoppingList);
		} else {
			res.status(500).json({ msg: ' Item Not Added' });
		}
	} catch (error) {
		res.status(500).json({ msg: 'No Item in List' });
	}
};

exports.updateOneItem = async (req, res, next) => {
	const id = req.params.id;
	try {
		let UpdateItem = {};
		UpdateItem.name = req.body.name;
		UpdateItem.isCompeleted = req.body.isCompeleted;

		let item = await db.shoppingList
			.updateOne({ _id: id }, { $set: { UpdateItem } })
			// .select('-__v')
			.exec();
		console.log(item);
		// if (item) {
		// 	// res.status(200).json(item);
		// }
	} catch (err) {
		res.status(500).json({ msg: 'item not Updated', err: err });
	}
};

exports.getOneList = async (req, res, next) => {
	try {
		const id = req.params.id;
		const item = await db.ShoppingList.find({ _id: id }).select('-__v').exec();
		if (item) {
			res.status(200).json(item);
		} else {
			res.status(400).json({ msg: ' Item Not in List' });
		}
	} catch (error) {
		res.status(500).json({ msg: ' Item Not in List' });
	}
};
exports.deletedShoppingList = async (req, res, next) => {
	try {
		const id = req.params.id;
		const item = await db.ShoppingList.remove({ _id: id });
		if (item) {
			res.status(200).json({ msg: 'Item deleted' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ msg: 'Item unable to delete', err: err });
	}
};

module.exports = exports;
