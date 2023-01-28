const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('../util/db');
const colors = require('colors');
const userDetails = require('./userDetails');

const forgetPasswords = sequelize.define('forgetPasswords',{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    passwordId : {
        type : DataTypes.STRING,
        allowNull : true
    },
    userId : {
        type : DataTypes.INTEGER
    },
    isActive : {
        type : DataTypes.BOOLEAN
    }
})

userDetails.hasMany(forgetPasswords);
forgetPasswords.belongsTo(userDetails);

sequelize.sync({force : false})
.then(res=>{
    console.log('forgetPasswords table synced successfully'.green);
    console.log(res);
})
.catch(err=>{
    console.log('There\'s an error while syncing the forgetPasswords table'.red);
    console.log(err);
})

module.exports = forgetPasswords;