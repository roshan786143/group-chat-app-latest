const messages = require('../models/userMessages');
const colors = require('colors');
const tokenValidation = require('./tokenValidation');

const storeincomingMessages = (req,res) =>{
    // const msg = req.body.msg;
    const userId = req.userId;
    const msg = req.body.msg;

    console.log(userId);

    console.log('requested user message ----------->>>'.bgGreen);
    console.log(msg);

    // res.send(msg);

    // res.send('msg sent  successfully.')

    messages.create({
        message : msg,
        userDetailId : userId
    })
    .then(record=>{
        console.log('user message successfully stored in the database'.bgGreen)
        res.json(record);
        console.log(record);
    })
    .catch(err=>{
        console.log('There\'s an error while storing user messages'.bgRed)
        console.log(err);
    })

}

module.exports = storeincomingMessages;