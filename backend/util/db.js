const Sequelize = require('sequelize');
const colors = require('colors');

const sequelize = new Sequelize('groupChat','root','98127634$Sql',{
    'host' : 'localhost',
    'dialect' : 'mysql'
})

sequelize.authenticate()
.then(()=>console.log('hey your groupChat db has been successfully created'.green))
.catch(err=>{
    console.log('There\'s an error while creating the db'.red)
    console.log(err);
})


module.exports = sequelize;