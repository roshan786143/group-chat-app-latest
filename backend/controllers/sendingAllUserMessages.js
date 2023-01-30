const messages = require('../models/messages');

const sendingAllUserMessages = (req,res)=>{
    const userId = req.userId;
    // res.json(userId);
    // console.log(userId);
    messages.findAll({
        where : {
            userDetailId : userId
        }
    })
    .then(records=>{
        records.map(userObj=>{
            console.log(userObj.dataValues.message);
        })
        // console.log(records);
        res.json(records)
    })
    .catch(err=>{
        console.log(err);
        res.json(err);
    })
}

module.exports = sendingAllUserMessages;