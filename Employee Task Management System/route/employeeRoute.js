const express = require('express');
const { addEmployee, getAllEmployee } = require('../controller/employeeController');
 
const router = express.Router();

router.post("/add", addEmployee)
router.get("/getall",getAllEmployee)

module.exports = router; 