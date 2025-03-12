const express = require('express');
const { addTask, getAllTasks, getTask } = require('../controller/taskController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post("/add/:pid",auth,addTask)
router.get("/getall",getAllTasks)
router.get('/get/:id',getTask)

module.exports = router; 