const express = require('express');
mongoose = require('mongoose');
router = express.Router();
ShoppingListController = require('../controller/ShoppingList');
const {
	getAllList,
	UpdateShoppingList,
	getOneList,
	updateOneItem,
	deletedShoppingList
} = require('../controller/ShoppingList');
router.route('/').get(getAllList).post(UpdateShoppingList);

router.route('/:id').get(getOneList).patch(updateOneItem).delete(deletedShoppingList);

module.exports = router;
