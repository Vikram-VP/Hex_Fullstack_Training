const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/user');
const { validationResult } = require('express-validator');

exports.signup=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({err:error.array()});
    }
   // console.log('in sign up')
   const{name,username,password}=req.body;
   //console.log(name,' ',username,' ',password)

   let user=await User.findOne({'username':username});
   if(user){
    return res.status(400).json({'msg':'Username already taken!!'});
   }
   let salt=10;
   const hashedPassword=await bcrypt.hash(password,salt);
   let userObj={
    'name':name,
    'username':username,
    'password':hashedPassword
   }

    user= new User(userObj);
    user=await user.save();
    return res.json(user);
}

exports.login=async(req,res)=>{
    const errors=validationResult(req);
    //console.log('in log up')
    if(!errors.isEmpty())
        return res.status(400).json({err :errors.array()});
        const{username,password}=req.body;
        let user=await User.findOne({'username':username});

        if(!user)//if user if undefine
        return res.status(400).json({'msg':'Invalid Credentials'});

        /**
         * check the password
         * plan password() - password :: $2b$10$MlNYWqMcDcR1LS6XBQrQR.takAE.WHyd9DO.VKxRqEZVgTJshjo9O
         * use bcrypt to compare plain text and hashed password
         */
        const isValid=await bcrypt.compare(password, user.password);
        if(!isValid){
            return res.status(400).json({'msg':'Invalid Credentials'})
        }
        /* generate the token 
       define your secret key (private key)  
    */
   const SECRET_KEY = '15111983200722';
   let userObj = {
    'username' : user.username,
    //'id' : user._id
   }
   const token = jwt.sign(userObj, SECRET_KEY , {'expiresIn' :'1h'});
    return res.json('take your token')
}