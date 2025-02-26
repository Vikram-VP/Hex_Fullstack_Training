const Application=require('../models/application');
const User=require('../models/user');
const Job=require('../models/job');



exports.applyJob=async(req,res)=>{
    try{
        const {jobId,userId}=req.body;
        const job=await Job.findOne(jobId);
        //console.log(job);
        if(!job){
            return res.status(400).json({msg:'Job not found'});
        }
        const user=await User.findOne(userId);
        if(!user){
            return res.status(400).json({msg:'User not found'});
        }
        let application={
            job:job._id,
            user:user._id,
            appliedDate:Date.now()
        }
        const applicationObj=new Application(application);
        application=await applicationObj.save();
        res.status(200).json({msg:'Job Application Submitted'})
    }
    catch(err){
        res.status(400).json({msg:'Error in api'+err.message});
    }
}

exports.getUserByJobId=async(req,res)=>{
    try{
    const jid=req.params.jid;
    const job = await Job.findById(jid);
    if(!job)
        return res.status(400).json({'msg':'Job with id not found'});
    const users= await Application.find({job:jid}).populate('user'," _id name username")

    const useronlyname=users.map((e)=>e.user)
    //to get only the required details
    res.status(200).json(useronlyname)
}
catch(err){
    res.status(400).json({'msg':`Error in api:${err.message}`}) 
}
}


exports.getJobByUserId=async(req,res)=>{
    try{
        const uid=req.params.uid;
        const users=await User.findById(uid);
        if(!users)
            return res.status(400).json({'msg':'User with the id not found'});
        const jobs=await Application.find({user:uid}).populate('job')
        const onlyjobs= jobs.map((e)=>e.job)
        res.status(200).json(onlyjobs)

    }
    catch(err){
        res.status(400).json({'msg':`Error in api:${err.message}`}) 
    }
}