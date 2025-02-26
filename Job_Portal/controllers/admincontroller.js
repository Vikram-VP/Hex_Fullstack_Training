const Admin=require('../models/admin');
const Job=require('../models/job');


exports.createJob=async(req,res)=>{
    try{
        const job=req.body;
        const jobObj= new Job(job);
        job=await jobObj.save();
        res.status(200).json({msg:"Job created successfully",job});
    }
    catch(err){
        res.status(400).json({msg:'Error in api'+err.message});
    }
};

exports.getAllJobs=async(res,req)=>{
    try{
        const jobs=await Job.find();
        if(!jobs){
            res.status(404).json({msg:'No jobs found'});
        }
        res.status(200).json(jobs);
    }
    catch(err){
        res.status(400).json({msg:"Error in api"+err.message});
    }
}