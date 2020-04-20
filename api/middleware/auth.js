const db = require('../models');
bcrypt = require('bcryptjs');
config = require('config');
jwt = require('jsonwebtoken');
Users = require('../models/User');




function auth(req, res, next) {
    const token = req.header('x-auth-token')

    // check for token
    if (!token) return res.status(401).json({msg:"No Token authorization denied"})
    
   
    try {
         // verify token
    const decoded = jwt.verify(token, process.env.JWT_KEY)
    // add user from payload
    req.user = decoded

        next()
    } catch (error) {
        res.status(400).json({msg: "token is not valid"})
    }
}

module.exports=  auth