const express=require('express');
const { adduser, login, getallUsers, getByCity } = require('../controllers/usercontroller');
const router=express.Router();


router.post('/add',adduser);
router.get('/login',login);
router.get('/getall',getallUsers);
router.get('/getByCity',getByCity);


module.exports=router;
