const express = require('express');
mongoose = require('mongoose');
router = express.Router();
ShoppingListController = require('../controller/ShoppingList');

router.route('/')
    .get(ShoppingListController.getAllList)
    .post(ShoppingListController.UpdateShoppingList);

router.route('/:id')
    .get(ShoppingListController.getOneList)
    .patch(ShoppingListController.updateOneItem)
    .delete(ShoppingListController.deletedShoppingList);

module.exports = router;
