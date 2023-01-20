const userDetails = require('../models/userDetails');
const bcrypt = require('bcrypt');

const storingUserDetailsOnDB = (req,res)=>{
    const {name, email, mobileNumber, password} = req.body;

    bcrypt.hash(password,10)
    .then(hashedPassword=>{

        userDetails.create({
            name,
            email,
            mobileNumber,
            password : hashedPassword
        })
        .then(record=>{
            console.log('user details has been successfully stored in db'.green);
            console.log(record);
            res.send('Signup successful.');
        })
        .catch(err=>{
            console.log('There\'s an error while storing the user details on db'.red);
            console.log('User already exists'.red);
            res.send('User already exists.');
        })

    .catch(err=>{
        console.log('There\'s an error while hashing the password'.red);
    })

    })


    // userDetails.create({
    //     name,
    //     email,
    //     mobileNumber,
    //     password
    // })
    // .then(record=>{
    //     console.log('user details has been successfully stored in db'.green);
    //     res.json(record);
    // })
    // .catch(err=>{
    //     console.log('There\'s an error while storing the user details on db'.red);
    //     res.json(err);
    // })

    // res.json(req.body);
}

module.exports = storingUserDetailsOnDB;