const sequelize = require('../util/db');
const colors = require('colors');
const { Sequelize, DataTypes } = require('sequelize');
const userMessages = require('./userMessages');

const userDetails = sequelize.define('userDetails',{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
      name : {
        type : DataTypes.STRING,
        allowNull : false
      },
      email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true,
      },
      mobileNumber : {
        type : DataTypes.BIGINT,
        allowNull : false
      },
      password : {
        type : DataTypes.STRING,
        allowNull : false
      }
})

userDetails.hasMany(userMessages);
userMessages.belongsTo(userDetails);

sequelize.sync({force : false})
.then(()=>console.log('hey your userDetails table has been created successfully'.green))
.catch(err=>{
  console.log('There\'s an error while creating your userDetails model'.red)
  console.log(err);
})
module.exports = userDetails;