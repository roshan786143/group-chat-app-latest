const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('../util/db');
const colors = require('colors');

const messages = sequelize.define('messages',{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    message : {
        type : DataTypes.STRING,
        allowNull : false
    }
})

sequelize.sync({force : false})
.then(result=>{
    console.log('messages table created successfully.'.bgGreen)
    console.log(result)
})
.catch(err=>{
    console.log('There\'s an error while creating the messages table.'.bgRed)
    console.log(err);
})

module.exports = messages;