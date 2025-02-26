const express=require('express');

const router=express.Router();
const {addInstructor,getAllInstructors}=require('../controllers/instructorcontroller');

router.post('/add',addInstructor);
router.get('/getall',getAllInstructors);

module.exports=router;
