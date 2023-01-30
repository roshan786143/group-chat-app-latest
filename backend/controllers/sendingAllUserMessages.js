const messages = require('../models/messages');
const userDetails = require('../models/userDetails');

const sendingAllUserMessages = (req,res)=>{
    const userId = req.userId;
    const userMessageWithName = [];
    const msgs = [];
    const ids = [];
    messages.findAll()
    .then(records=>{
        records.map(userObj=>{
            // console.log(userObj.dataValues.message);
            // console.log(userObj.dataValues.userDetailId);
            let msg = userObj.dataValues.message;
            let id = userObj.dataValues.userDetailId;
            msgs.push(msg);
            ids.push(id);
        })
        for(let i = 0;i < ids.length;i++){
            userDetails.findAll({
                where : {
                    id : ids[i]
                }
            }).then(record=>{
                // console.log(record);
                record.map(user=>{
                    // console.log(user.dataValues.name);
                    const name = user.dataValues.name;
                    userMessageWithName.push({msg : msgs[i], name : name})
                    if(i==ids.length-1){
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