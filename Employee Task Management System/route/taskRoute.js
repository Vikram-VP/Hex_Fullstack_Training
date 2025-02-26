const express = require('express');
const { addTask, getAllTasks } = require('../controller/taskController');
   
const router = express.Router();

router.post("/add/:pid", addTask)
router.get("/getall",getAllTasks)

module.exports = router; 