const express = require('express');
const userDetails = require('../models/userDetails');
const router = express.Router();
const storingUserDetailsOnDB = require('../controllers/storingUserDetailsOnDB');
const authenticatingUserLoginDetails = require('../controllers/authenticatingUserLoginDetails');
const storeincomingMessages = require('../controllers/storeincomingMessages');
const resetPassword = require('../controllers/resetPassword');
const updateUserPassword = require('../controllers/updatePassword');

router.post('/user/signup',storingUserDetailsOnDB);

router.post('/user/login',authenticatingUserLoginDetails);

router.post('/user/sendMessage',storeincomingMessages);

router.post('/user/forgotPassword',resetPassword);

router.post('/password/updatePassword',updateUserPassword);

module.exports = router;