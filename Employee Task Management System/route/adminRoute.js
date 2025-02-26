const express = require('express');
const { addAdmin } = require('../controller/admincontroller');
    
const router = express.Router();

router.post("/add", addAdmin)
 
module.exports = router; 