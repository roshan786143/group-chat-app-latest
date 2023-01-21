const bcrypt = require('bcrypt');
const userDetails = require('../models/userDetails');
const jwt = require('jsonwebtoken');


const authenticatingUserLoginDetails = (req,res)=>{
    const {email, password} = req.body;
    // res.send(email);

    if(email.length <=0){
        res.send('emptyField');
        return
    }

    userDetails.findOne({
        where : {
            email : email
        }
    })
    .then(record=>{
        // console.log(record);

        bcrypt.compare(password,record.password)
            .then(isValidPassword=>{
                if(isValidPassword){
                    const secretKey = require('crypto').randomBytes(64).toString('hex');
                    const token = jwt.sign({id : record.id,name : record.name},secretKey);
                    console.log(token);
                    // res.send('login successful.')
                    res.json({password : 'validPassword',token})
                }else{
                    res.send('notAValidPassword')
                }
            })
            .catch(err=>{
                console.log('There\'s an error while comparing the password'.red);
            })

        // res.json(record.password);
    })
    .catch(err=>{
        console.log(err);
        res.send('noUser')
        // res.send('User doesn\'t exist in our db,Pls.signup.')
    })
    


}

module.exports = authenticatingUserLoginDetails;

