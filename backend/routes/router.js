const express = require('express');
const userDetails = require('../models/userDetails');
const router = express.Router();
const storingUserDetailsOnDB = require('../controllers/storingUserDetailsOnDB');
const authenticatingUserLoginDetails = require('../controllers/authenticatingUserLoginDetails');
const storeincomingMessages = require('../controllers/storeincomingMessages');
const resetPassword = require('../controllers/resetPassword');
const updateUserPassword = require('../controllers/updatePassword');
const tokenValidation = require('../controllers/tokenValidation');
const sendingAllUserMessages = require('../controllers/sendingAllUserMessages');

router.post('/user/signup',storingUserDetailsOnDB);

router.post('/user/login',authenticatingUserLoginDetails);

router.post('/user/sendMessage',tokenValidation,storeincomingMessages);

router.post('/user/forgotPassword',resetPassword);

router.post('/password/updatePassword',updateUserPassword);

router.get('/messages/gettingMessages/:id',tokenValidation,sendingAllUserMessages);

module.exports = router;