/* AIM is to insert course in the DB

Body:{
"title":"NOde.js Rest Api",
"credits":100,
"ShortDesc":"Create rest api using node.js express server, mongo db",
"fee":7500}
*/
const Course = require("../models/course");

exports.addCourse=async (req,res)=>{
    try{
        let courseData=req.body;
        const courseObj=new Course(courseData);//object of course class created
        courseData=await courseObj.save();
        //console.log(courseData);
        res.status(200).json(courseData);
    }
    catch(err){
        res.status(400).json({'msg':`error in api: ${err.message}`});
    }
}

exports.getAllCourses=async (req,res)=>{
    try{
        const courses = await Course.find();
        res.status(200).json(courses);
    }
    catch(err){
        res.status(400).json({'msg':`error in api: ${err.message}`});
    }
}

exports.deleteCourse=async (req,res)=>{
    //take the id of the record we wish to delete
    try{
        let id = req.params.id;
        //ensure that the record exists before u delete it..
        const course =await Course.findOne({'_id':id});
        if(!course){
            //if course is not initialized or undefined
            res.status(400).json({'msg':`Invalid ID :${err.message}`});
        }
        else{
            await course.deleteOne({'_id':id});
            res.status(200).json({'msg':`Course deleted`});
        }
    }
    catch(err){
        res.status(400).json({'msg':`error in api: ${err.message}`});
    }
}

exports.deleteCoursev2=async (req,res)=>{
    //take the id of the record we wish to delete
    try{
        let id = req.params.id;
        //ensure that the record exists before u delete it..
        const resp =await Course.findOneAndDelete({'_id':id});
        console.log(resp)
        if(resp == null){
            //if course is not initialized or undefined
            res.status(400).json({'msg':`Invalid ID :${err.message}`});
        }
        else{
            res.status(200).json({'msg':`Course deleted`});
        }
    }
    catch(err){
        res.status(400).json({'msg':`error in api: ${err.message}`});
    }
}

exports.getCourseById=async (req,res)=>{
    try{
        let id=req.params.id;
        let courseObj=await Course.findOne({'_id':id});
        res.status(200).json(courseObj); 
    }
    catch(err){
        res.status(400).json({'msg':`error in api: ${err.message}`});
    }
}
/**
 * 
 * update is the combination of id with body 
 */
exports.updateCourse=async(req,res)=>{
    try{
        let id = req.params.id;
        let newcourseObj = req.body;
        let updatedcourse=await Course.findByIdAndUpdate(id,newcourseObj);
        if(!updatedcourse){
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