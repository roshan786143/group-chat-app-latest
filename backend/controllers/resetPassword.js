require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const forgetPasswords = require('../models/forgetPasswords');
const userDetails = require('../models/userDetails');

const resetPassword = (req,res) =>{
    const userEmail = req.body;

    // console.log(userEmail);
   
    userDetails.findAll({
      where : {
        email : userEmail.email
      }
    })
    .then(record=>{
      console.log(record[0].dataValues.id);
      console.log(record);

      const userId = record[0].dataValues.id;

      const uId = uuidv4();

      forgetPasswords.create({
        passwordId : uId,
        userId : userId,
        isActive : false,
        userDetailId : userId
      }).then(()=>{
        console.log('Successfully sent the password reset link.');
        res.json(uId);
      }).catch(err=>{
        console.log('There\'s an error while sending reset password link');
        console.log(err);
      })
      // res.json(record);
    })
  .catch((error) => {
    console.error(error)
    res.json('There\'s an error while sending the email')
  })
}

module.exports = resetPassword;