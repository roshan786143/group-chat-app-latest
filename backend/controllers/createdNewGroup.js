const userDetails = require('../models/userDetails');
const groups = require('../models/groups');
const userGroups = require('../models/userGroups');

const createdNewGroup = (req,res)=>{
    const userId = req.userId;
    console.log(userId);
    console.log(req.body);
    // res.json(req.body);

    groups.create({
        groupNames : req.body.groupName,
        groupAdmin : userId
    })
    .then(record=>{
        // console.log(record.dataValues.id);
        userGroups.create({
            userDetailId : userId,
            groupId : record.dataValues.id
        })
        .then(res=>{
            console.log(res);
            // res.json(res)
        })
        .catch(err=>{
            console.log(err);
        })
        
    })


}

module.exports = createdNewGroup;