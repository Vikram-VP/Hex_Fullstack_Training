const express = require('express');
const { addCourse, getAllCourses, deleteCourse, updateCourse, getCourseById,deleteCoursev2 } = require('../controllers/coursecontroller');

const router = express.Router();

router.post("/add", addCourse)
router.get("/getall", getAllCourses)
router.delete("/delete/:id", deleteCourse)
router.put("/update/:id", updateCourse)
router.get("/get/:id", getCourseById)
//:id - dynamic parameter or path parameter

module.exports = router;

