const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('../util/db');
const userDetails = require('./userDetails');

const groups = sequelize.define('groups',{
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    groupNames : {
        type : DataTypes.STRING
    },
    groupAdmin : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
})

sequelize.sync({force : false})
.then(res=>{
    console.log(res);
    console.log('Successfully created the groups model and it\'s syncing now');
}).catch(err=>{
    console.log(err);
    console.log('There\'s an error while syncing the groups model');
})

module.exports = groups;