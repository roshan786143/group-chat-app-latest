const { Sequelize, DataTypes} = require('sequelize'); 
const sequelize = require('../util/db');

const userGroups = sequelize.define('userGroups',{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    }
})

sequelize.sync({force : true})
.then(()=>{
    console.log('userGroups table has been created and synced successfully')
})
.catch(err=>{
    console.log(err);
})

module.exports = userGroups;