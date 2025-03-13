const express = require('express');
const { addTask, getAllTasks, getTask, archiveTask } = require('../controller/taskController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post("/add/:pid",auth,addTask)
router.get("/getall",getAllTasks)
router.get('/get/:id',getTask)
router.put('/archive/:id',archiveTask)

module.exports = router; 