const Student=require('../models/student');

exports.addStudent=async (req,res)=>{
    try{
        let studentData=req.body;
        const studentObj=new Student(studentData);//object of course class created
        studentData=await studentObj.save();
        //console.log(courseData);
        res.status(200).json(studentData);
    }
    catch(err){
        res.status(400).json({'msg':`error in api: ${err.message}`});
    }
}

exports.getAllStudent=async (req,res)=>{
    try{
        const students = await Student.find();
        res.status(200).json(students);
    }
    catch(err){
        res.status(400).json({'msg':`error in api: ${err.message}`});
    }
}

exports.deleteStudentById=async (req,res)=>{
    //take the id of the record we wish to delete
    try{
        let id = req.params.id;
        //ensure that the record exists before u delete it..
        const student =await Student.findOne({'_id':id});
        if(!student){
            //if course is not initialized or undefined
            res.status(400).json({'msg':`Invalid ID :${err.message}`});
        }
        else{
            await student.deleteOne({'_id':id});
            res.status(200).json({'msg':`Course deleted`});
        }
    }
    catch(err){
        res.status(400).json({'msg':`error in api: ${err.message}`});
    }
}

exports.getStudentById=async (req,res)=>{
    try{
        let id=req.params.id;
        let studentObj=await Student.findOne({'_id':id});
        res.status(200).json(studentObj); 
    }
    catch(err){
        res.status(400).json({'msg':`error in api: ${err.message}`});
    }
}
/**
 * 
 * update is the combination of id with body 
 */
exports.updateStudent=async(req,res)=>{
    try{
        let id = req.params.id;
        let newstudentObj = req.body;
        let updatedstudent=await Course.findByIdAndUpdate(id,newstudentObj);
        if(!updatedstudent){
            res.status(400).json({'msg':`Invalid ID :${id}`});
        }
        else{
            res.status(200).json({'msg':`course record updated!!`});
        }
    }
    catch(err){
        res.status(400).json({'msg':`error in api : ${err.message} `});
    }

}