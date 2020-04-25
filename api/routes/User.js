const express = require('express');
mongoose = require('mongoose');
router = express.Router();
UserController = require('../controller/UserController');
auth = require('../middleware/auth');
const { register_new_user, login_user, get_user, get_users } = require('../controller/UserController');

router.post('/signup', register_new_user);
router.post('/login', login_user);
router.get('/user/:id', get_user);
router.get('/users', get_users);
router.route('/:ProductId').get().delete();
module.exports = router;
