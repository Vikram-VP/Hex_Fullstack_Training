const Course=require('../models/course');
const Student=require('../models/student');
const Enrollment=require('../models/enrollment');
exports.enrollStudentInCourse=async (req,res)=>{
    //console.log('enroll api callled)
    const {sid,cid}=req.body;
    //console.log(`student id:${sid} and course id is ${cid}`)

    //step 1: validate sid anfn cid

    let student= await Student.findById(sid);
    if(!student){// if student is not found
        return res.status(400).json({msg:'Student id is invalid'});
    }
    let course= await Course.findById(cid);
    if(!course){// if course is not found
        return res.status(400).json({msg:'Course id is invalid'});
    }

    //step 2: create enroll obj and save it in db
    let enrollObj= {
        studentid:sid,
        courseid:cid,
    }
    let enroll=new Enrollment(enrollObj);
    enroll = await enroll.save();
    res.status(200).json(enroll);
}
exports.fetchAllEnrollments=async (req,res)=>{
    try{
        const enrollments= await Enrollment.find().populate('studentid').populate('courseid');
        res.status(200).json(enrollments);
    }
    catch(err){
        res.status(400).json({'msg':`Error in api:${err.message}`})
    }
}

/**
 * fetch all the students enroled in the course with the given id
 * PATH:/api/enroll/students
 * param: courseId
 * response:student[]
 */

exports.getStudentByCourseId=async(req,res)=>{
    try{
    let courseId=req.params.courseId;
    const course= await Course.findById(courseId);
    if(!course){
        return res.status(400).json({msg:'Course id is invalid'});
    }
    // understand the below commands
    const enrolls = await Enrollment.find({courseid:courseId}).populate('studentid',"_id name email")

    // i need students map only the name
    const students=enrolls.map((e)=>e.studentid)
    return res.status(200).json(students)
    }
    catch(err){
        res.status(400).json({'msg':`Error in api:${err.message}`}) 
    }
}

/* fetch all courses based on given student id.
PATH: /api/enroll/courses
param: studentId
response: course[]
*/

exports.getCourseByStudentId=async (req,res)=>{
    try{
        let studentId=req.params.studentId;
        const students= await Student.findById(studentId);
        if(!students){
            return res.status(400).json({'msg':`Invalid id ${studentId}`})
        }
        const enrolls= await Enrollment.find({studentid:studentId}).populate("courseid")
        let courses=enrolls.map((e)=>e.courseid)
        res.status(200).json(courses)
        }
        catch(err){
            res.status(400).json({'msg':`Error in api:${err.message}`})
        }
    }

/** to un-enroll student from the course 
 * PATH: /api/enroll/unenroll
param: courseId,studentId
response: student unenrolled
*/

exports.unenrollStudentInCourse=async(req,res)=>{
    try{
        let studentId=req.params.studentId;
        let courseId=req.params.courseId;

        let student = await Student.findById(studentId);

        if(!student){
            return res.status(400).json({'msg':`Student ID invalid!`});
        }

        let course = await Course.findById(courseId);

        if(!course){
            return res.status(400).json({'msg':`Course id invalid`});
        }

        const enrollment= await Enrollment.findOne({'studentid':studentId,'courseid':courseId});

        if (!enrollment){
            return res.status(400).json({'msg':` Student is not enrolled`})
        }
        await Enrollment.deleteOne({'studentid':studentId,'courseid':courseId});
        return res.status(200).json({'msg':`Student unenrolled`})
    }
    catch(err){
        res.status(400).json({'msg':`Error in api:${err.message}`})
    }
}

exports.getEnrollmentbyDateRange=async (req,res)=>{
    const {fromDate,toDate} = req.query; 
    //console.log(fromDate) -- "2025-02-21"
    //console.log(toDate) -- '2025-02-23'

    const fDate = new Date(fromDate);
    const tDate = new Date(toDate)
    console.log(fDate)  
    console.log(tDate) 

    if(isNaN(fDate)){
        return res.status(400).json({'msg': 'From date invalid, correct format: YYYY-MM-DD'})
    }
    if(isNaN(tDate)){
        return res.status(400).json({'msg': 'To date invalid, correct format: YYYY-MM-DD'})
    }

    const enrolls = await Enrollment.find({'date_of_enroll': {$gt:fDate , $lt:tDate} })

    res.status(200).json(enrolls)
}

// = (eq) !=(neq) <(lt)  >(gt)  <=(lte)  >=(gte)    tdate>date_of_enroll>fdate 