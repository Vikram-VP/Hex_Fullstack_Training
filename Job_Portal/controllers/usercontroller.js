const User=require('../models/user');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const Admin = require('../models/admin');


exports.adduser=async(req,res)=>{
    try{
        const{name,city,username,password,role,cv,profilepic}=req.body;
        let salt=10;

        const hashedpassword= await bcrypt.hash(password,salt);

        let user=new User({name,city,username,'password':hashedpassword,role,cv,profilepic});
        user=await user.save();
        res.status(200).json(user);
    }
    catch(err){
        console.log({msg:'Error in api '+err.message})
    }
}

exports.login=async(req,res)=>{
    try{
        const{username,password}=req.body;

        const user=await User.findOne({'username':username});
        if(!user)
            return res.status(400).json({'msg':'Invalid Credentials'});

        const isValid= await bcrypt.compare(password,user.password);
        if(!isValid)
            return res.status(400).json({'msg':'Invalid Credentials'}); 

        const SECRET_KEY='15111983200722'
        let userObj={
            'username':user.username
        }
        const token = await jwt.sign(userObj,SECRET_KEY,{'expiresin':'20h'})
        res.status.json({'token':token})


    }
    catch(err){
        console.log({msg:'Error in api '+err.message})
    }
}

exports.getallUsers=async(req,res)=>{
let {page,size}=req.query;
page=parseInt(page) || 1;
size=parseInt(size) || 2;

let skip=(page-1)*size;

const users=await User.find().skip(skip).limit(size);
let totalRecords=await User.countDocuments();
let totalPages= await Math.ceil(totalRecords/size)

res.json({
'totalRecords':totalRecords,
        'totalPages':totalPages,
        'currentPage':page,
        'data':users})
}

exports.getByCity=async(req,res)=>{
    try{
        let city=req.params.city;
        let user=await User.find({'city':city});
        if(!city)
            return res.status(400).json({'msg':'User with the city is not found'})
        
        res.status(200).json(user); 
    }
    catch(err){
        res.status(400).json({'msg':`error in api: ${err.message}`});
    }
}
