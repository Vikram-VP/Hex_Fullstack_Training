const express = require('express');
const auth = require('../middleware/auth');
const { addComment,getCommentsByTask } = require('../controller/commentController');

const router = express.Router();

router.post("/add",auth, addComment);
router.get("/getByTask/:taskId", getCommentsByTask);
 
module.exports = router; 