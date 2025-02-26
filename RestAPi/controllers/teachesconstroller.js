const Instructor=require('../models/instructor');
const Course=require('../models/course');
const Teaches=require('../models/teaches');

exports.assignCourseToInstructor=async(req,res)=>{
    try{
        const{instid,cid}=req.body;

        let inst=await Instructor.findById(instid);
        if(!inst){
            return res.status(400).json({'msg':'Instructor id is invalid'});
        }

        let course=await Course.findById(cid);
        if(!course){
            return res.status(400).json({'msg':'Course id is invalid'});
        }

        let teach={
            instructorid:instid,
            courseid:cid
        }
        let teachObj=new Teaches(teach);
        teach=await teachObj.save();
        res.status(200).json(teach);
    }
    catch(err){
        res.status(400).json({'msg':'Error in api: ${err.message'});
    }
}

exports.unassignCourseToInstructor=async(req,res)=>{
    try{
        const instid=req.params.instid;
        const cid=req.params.cid;

        const inst=await Instructor.findById(instid);
        if(!inst){
            return res.status(400).json({'msg':'Instructor not found'});
        }

        const course=await Course.findById(cid);
        if(!course){
            return res.status(400).json({'msg':'Course not found'});
        }

        const teach=await Teaches.findOne({instructorid:instid,courseid:cid});
        if(!teach){
            return res.status(400).json({'msg':'Instructor is not teaching this course'});
        }
        await teach.deleteOne({instructorid:instid,courseid:cid});
        res.status(200).json({'msg':'Unassigned course to instructor'});
    }
    catch(err){
        res.status(400).json({'msg':'Error in api: ${err.message'});
    }
}

exports.getInstructorByCourseId=async(req,res)=>{
    try{
        const cid=req.params.cid;
        const course=await Course.findById(cid);
        if(!course){
            return res.status(400).json({'msg':'Course id is invalid'});
        }
        const teach=await Teaches.find({courseid:cid}).populate('instructorid',"_id name");
        if(!teach){
            return res.status(400).json({'msg':'Course is not assigned to any instructor'});
        }
        res.status(200).json(teach);
    }
    catch(err){
        res.status(400).json({'msg':'Error in api: ${err.message'});
    }
}

exports.getCourseByInstructorId=async(req,res)=>{
    try{
        const instid=req.params.instid;
        const inst= await Instructor.findById(instid);

        if(!inst){
            return res.status(400).json({'msg':'Instructor id is invalid'});
        }
        const teach=await Teaches.find({instructorid:instid}).populate('courseid','title shortDesc');
        if(!teach){
            return res.status(400).json({'msg':'Instructor is not teaching any course'});
        }
        res.status(200).json(teach);
    }
    catch(err){
        res.status(400).json({'msg':'Error in api: ${err.message'});
    }
}