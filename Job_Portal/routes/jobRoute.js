const express=require('express');
const router=express.Router();
const {createJob,getAllJobs}=require('../controllers/jobcontroller')

router.post('/createjob',createJob);
router.get('/getAllJobs',getAllJobs);

module.exports=router;
