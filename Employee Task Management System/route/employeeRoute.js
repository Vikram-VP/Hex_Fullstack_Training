const express = require('express');
const { addEmployee, getAllEmployee, login, uploadCV, uploadpic, emp } = require('../controller/employeeController');
const auth = require('../middleware/auth');
const multer=require('multer');
const router = express.Router();
const upload=multer({dest:'/Users/vikramprakash/Documents/Hex-Fullstack-Trainning/Etms_ui/public/docs/cv'})
router.post("/add",auth, addEmployee)
router.get("/getall",auth,getAllEmployee)
router.post("/uploadcv",upload.single('file'),auth,uploadCV)
router.post("/uploadpic",upload.single('file'),auth,uploadpic)
router.get("/emp",auth,emp)

module.exports = router; 