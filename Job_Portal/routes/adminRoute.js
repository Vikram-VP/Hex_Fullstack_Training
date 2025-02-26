const express=require('express');
const { createJob, getAllJobs } = require('../controllers/admincontroller');

const router=express.Router();

router.post('/createjob',createJob);
router.get('getAllJobs',getAllJobs);

module.exports=router;