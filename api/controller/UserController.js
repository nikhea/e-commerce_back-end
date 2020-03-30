const db = require('../models');
bcrypt = require('bcryptjs');
config = require('config');
jwt = require('jsonwebtoken');
Users = require('../models/User');

exports.register_new_user = async (req, res, next) => {
	const { email, name, password, nickname } = req.body;

	// simple validation
	if (!email || !name || !password || !nickname) {
		return res.status(400).json({ msg: 'please enter all fields' });
	}

	// check for existing User
	Users.findOne({ email }).then((user) => {
		if (user) res.status(400).json({ msg: 'user already exist' });

		const newUser = db.Users({
			name,
			email,
			nickname,
			password
		});

		// create Salt and Hash
		bcrypt.genSalt(10, (err, Salt) => {
			bcrypt.hash(newUser.password, Salt, (err, hash) => {
				if (err) throw err;
				newUser.password = hash;

				newUser.save().then((user) => {
					jwt.sign(
						{ id: user.id },
						// config.get('sl_myjwtSecret'),
						process.env.JWT_KEY,
						{ expiresIn: 3600 },
						(err, token) => {
							if (err) throw err;
							res.json({
								token,
								user: {
									id: user.id,
									name: user.name,
									email: user.email,
									nickname: user.nickname
								}
							});
						}
					);
				});
			});
		});
	});
};

exports.login_user = async (req, res, next) => {
	const { email, password } = req.body;

	// simple validation
	if (!email || !password) {
		return res.status(400).json({ msg: 'please enter all fields' });
	}

	// check for existing User
	Users.findOne({ email }).then((user) => {
		if (!user) res.status(400).json({ msg: 'user does not exist' });

		//    validate password
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (!isMatch) return res.status(400).json({ msg: 'invalid credentials' });

			jwt.sign(
				{ id: user.id },
				// config.get('sl_myjwtSecret'),
				process.env.JWT_KEY,
				{ expiresIn: 3600 },
				(err, token) => {
					if (err) throw err;
					res.json({
						token,
						user: {
							id: user.id,
							name: user.name,
							email: user.email,
							nickname: user.nickname
						}
					});
				}
			);
		});
	});
};



exports.get_users = async (req, res, next) => {
	 try {
       const users = await  db.Users.findById(req.user.id)
          res.status.json(users)
     } catch (error) {
         
     }
};