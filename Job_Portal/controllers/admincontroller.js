const Admin=require('../models/admin');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs')

exports.addAdmin=async(req,res)=>{
    let{username,password}=req.body;

    let salt=10;
    /**
     * this pass is clear text , i want to generate a hash code to save it in DB
     */
    const hashedPassword=await bcrypt.hash(password,salt);

    let admin=new Admin({username,'password':hashedPassword});
    admin=await admin.save();
    res.json(admin);
}

exports.login=async(req,res)=>{
    let{username,password}=req.body;

    // i will fetch admin details from db using the given username
    let admin=await Admin.findOne({'username':username});

    if(!admin){
        return res.status(400).json({'msg':"Invalid Credentials"});
    }

    /**
     * check the password
     * the password is given in plain text in request
     * we have stored as hash in db
     * use the bcrpt to compare the plain text and the hashed password
     * 
     */

    let isValid = await bcrypt.compare(password,admin.password);
    if(!isValid)
        return res.status(400).json({'msg':'Invalid the credentials'});

        /**
         * sincce i have verified the username and password
         * its time to generate the token
         */

        const SECRET_KEY='15111983200722';
        let adminObj={
            username:admin.username
        }
        let token= await jwt.sign(adminObj,SECRET_KEY,{'expiresIn':'20h'});
        res.json({'token':token})

    }