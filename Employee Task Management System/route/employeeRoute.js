const express = require('express');
const { addEmployee, getAllEmployee, login } = require('../controller/employeeController');
const auth=require('../middleware/auth');

 
const router = express.Router();

router.post("/add", addEmployee)
router.get("/getall",auth,getAllEmployee)
router.get('/login',login)

module.exports = router; 