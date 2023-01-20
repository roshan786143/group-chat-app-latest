const express = require('express');
const userDetails = require('../models/userDetails');
const router = express.Router();
const storingUserDetailsOnDB = require('../controllers/storingUserDetailsOnDB');
const authenticatingUserLoginDetails = require('../controllers/authenticatingUserLoginDetails');

router.post('/user/signup',storingUserDetailsOnDB);

router.post('/user/login',authenticatingUserLoginDetails);

module.exports = router;