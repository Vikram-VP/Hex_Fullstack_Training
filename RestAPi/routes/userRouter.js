const express=require('express');
const { signup, login } = require('../controllers/usercontoller');
const { body } = require('express-validator');
const router=express.Router();
router.post("/signup",[
    body('username').not().isEmpty(),
    body('password').isLength({min:6})
],signup);
router.post("/login",login);
module.exports = router;