const express=require('express')
const router=express.Router();
const {addStudent,getAllStudent,getStudentById,deleteStudentById,updateStudent}=require('../controllers/studentcontroller')

router.post("/add", addStudent)
router.get("/getall", getAllStudent)
router.delete("/delete/:id", deleteStudentById)
router.put("/update/:id", updateStudent)
router.get("/get/:id", getStudentById)
//:id - dynamic parameter or path parameter

module.exports = router;