const express=require('express');
const { enrollStudentInCourse, fetchAllEnrollments, getCourseByStudentId, getStudentByCourseId, unenrollStudentInCourse,getEnrollmentbyDateRange} = require('../controllers/enrollcontroller');
const router=express.Router();

router.post('/add',enrollStudentInCourse);
router.get('/all',fetchAllEnrollments);
router.get('/students/:courseId',getStudentByCourseId);
router.get('/courses/:studentId',getCourseByStudentId);
router.get('/unenroll/:studentId/:courseId',unenrollStudentInCourse);
router.get('/date',getEnrollmentbyDateRange);
module.exports=router;  //exporting the router to use in other files.  //export