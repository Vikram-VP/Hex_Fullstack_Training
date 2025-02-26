const express=require('express');
const { addAdmin,login } = require('../controllers/admincontroller');


const router=express.Router();

router.post("/add", addAdmin);
router.get('/login',login);

module.exports=router;