const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    studentid:{type: mongoose.Schema.Types.ObjectId,ref:'Student',required:true},
    courseid:{type: mongoose.Schema.Types.ObjectId,ref:'Course',required:true},
    date_of_enroll:{type: Date,default:Date.now,required:true}
})

const Enrollment = mongoose.model('Enrollment',enrollmentSchema);
module.exports=Enrollment;