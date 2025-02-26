const Application=require('../models/application');
const User=require('../models/user');
const Job=require('../models/job');


exports.adduser=async(req,res)=>{
    try{
        const user=req.body;
        const userObj=new User(user);
        user=await userObj.save();
        res.status(200).json(user);
    }
    catch(err){
        console.log({msg:'Error in api'+err.message});
    }
}
exports.applyJob=async(req,res)=>{
    try{
        const {jobId,userId}=req.body;
        const job=await Job.findById(jobId);
        if(!job){
            return res.status(400).json({msg:'Job not found'});
        }
        const user=await User.findById(userId);
        if(!user){
            return res.status(400).json({msg:'User not found'});
        }
        const application={
            job:jobId,
            user:userId,
            appliedDate:Date.now
        }
        const applicationObj=new Application(application);
        application=await applicationObj.save();
        res.status(200).json({msg:'Job Application Submitted'})
    }
    catch(err){
        res.status(400).json({msg:'Error in api'+err.message});
    }
}