const express = require('express');
const userDetails = require('../models/userDetails');
const router = express.Router();
const storingUserDetailsOnDB = require('../controllers/storingUserDetailsOnDB');

router.post('/user/signup',storingUserDetailsOnDB);

module.exports = router;