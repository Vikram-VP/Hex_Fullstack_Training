const express=require('express');
const  {applyJob, getJobByUserId, getUserByJobId}  = require('../controllers/applicationcontroller');
const router=express.Router();

router.post('/apply',applyJob);
router.get('/getJobByUserId/:uid',getJobByUserId);
router.get('/getUserByJobId/:jid',getUserByJobId);
module.exports=router;
