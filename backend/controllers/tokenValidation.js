const colors = require('colors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenValidation = (req,res,next) =>{
const token = req.header('Authorization');

// res.send('oh no');

const userObj = jwt.verify(token,process.env.SECRET_kEY);
    
req.userId = userObj.id;

// console.log(req.userId);

// res.json(req.userId);

next();

}


module.exports = tokenValidation;