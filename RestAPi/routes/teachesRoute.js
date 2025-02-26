const express=require('express');
const router=express.Router();

const{assignInstructorToCourse,unassignCourseToInstructor,getInstructorByCourseId,getCourseByInstructorId}=require('../controllers/teachesconstroller');

router.post('/assign',assignInstructorToCourse);
router.delete('/unassign/:instid/:cid',unassignCourseToInstructor);
router.get('/instrctors/:cid',getInstructorByCourseId);
router.get('/courses/:instid',getCourseByInstructorId);

module.exports=router;
