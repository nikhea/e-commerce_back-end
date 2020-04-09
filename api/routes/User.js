const express = require('express');
mongoose = require('mongoose');
router = express.Router();
UserController = require('../controller/UserController');

router.post('/signup', UserController.register_new_user);
router.post('/login', UserController.login_user);
router.get('/users', UserController.get_users);

router.route('/:ProductId').get().delete();
module.exports = router;
