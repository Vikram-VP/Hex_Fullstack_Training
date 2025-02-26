const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const Admin=require('../models/admin');

exports.addAdmin=async(req,res)=>{
    let {username,password}=req.body;

    let salt=10;
    const hashedPassword=await bcrypt.hash(password,salt);
    let admin = new Admin({username,'password':hashedPassword});
    admin = await admin.save();
    res.json(admin);
}

exports.login=async(req,res)=>{
    let {username,password}=req.body;

    let admin=await Admin.findOne({'username':username});
    // usually email is given for username
    if(!admin)
        return res.status(400).json({'msg':'Invalid Credentials'})

    // we have to check whether the pass word is valid

    const isValid=await bcrypt.compare(password,admin.password);
    if(!isValid)
        return res.status(400).json({'msg':'Invalid Credentials'})

    const SECRET_KEY='15111983200722';
    let adminObj={
        'id':admin.id
    }
    const token=jwt.sign(adminObj,SECRET_KEY,{'expiresIn':'20h'});
    res.json('token'+token);
}