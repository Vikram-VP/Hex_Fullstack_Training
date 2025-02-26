const Instructor=require('../models/instructor');

exports.addInstructor=async(req,res)=>{
    try{
        let InstructorData =req.body;
        const INstructorObj=new Instructor(InstructorData);
        InstructorData=await INstructorObj.save();
        res.status(200).json(InstructorData);
    }
    catch(err){
        res.status(400).json({'msg':'Error in api: ${err.message'});
    }
}

exports.getAllInstructors=async(req,res)=>{
    try{
        const instructors=await Instructor.find();
        if(!instructors){
            res.status(400).json({'msg':'No instructors found'});
        }
        else{
            res.status(200).json(instructors);
        }
        }
    catch(err){
        res.status(400).json({'msg':'Error in api: ${err.message'});
    }
}