const messages = require('../models/messages');
const userDetails = require('../models/userDetails');
const { Op, Sequelize } = require("sequelize");

const sendingAllUserMessages = (req,res)=>{
    const userId = req.userId;
    const msgId = req.params.id;
    console.log('---------------------->>>');
    console.log(msgId);
    // res.json(msgId);
    const userMessageWithName = [];
    const msgs = [];
    const userIds = [];
    const messageIds = [];
    messages.findAll({
        where : {
            id: {
            [Op.gte]: msgId      
        }  
    }
})
    .then(records=>{
        console.log(records);
        records.map(userObj=>{
            // console.log(userObj.dataValues.message);
            // console.log(userObj.dataValues.userDetailId);
            // console.log('----------------->>>'.bgGreen);
            // console.log(userObj.dataValues.id);
            let msg = userObj.dataValues.message;
            let userId = userObj.dataValues.userDetailId;
            let id = userObj.dataValues.id;
            msgs.push(msg);
            userIds.push(userId);
            messageIds.push(id);
        })
        for(let i = 0;i < userIds.length;i++){
            userDetails.findAll({
                where : {
                    id : userIds[i]
                }
            }).then(record=>{
                // console.log(record);
                record.map(user=>{
                    // console.log(user.dataValues.name);
                    const name = user.dataValues.name;
                    userMessageWithName.push({msg : msgs[i], name : name, msgId : messageIds[i]})
                    if(i==userIds.length-1){
                        console.log(userMessageWithName);
                        res.json(userMessageWithName);
                    }
                })
                // console.log(userMessageWithName);
            })
        }
    })
    .catch(err=>{
        console.log(err);
        res.json(err);
    })
}

module.exports = sendingAllUserMessages;