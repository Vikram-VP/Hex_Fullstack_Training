const express = require('express');
const { getUserInfo } = require('../controller/authController');
const auth = require('../middleware/auth');
     
const router = express.Router();

router.get("/user",auth,getUserInfo)
 
module.exports = router; 