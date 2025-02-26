const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title:{type:String,required:true},
    credits:{type:Number,required:true},
    shortDesc:{type:String},
    fee:{type:Number,required:true}
})

const Course = mongoose.model('Course',courseSchema);
module.exports=Course;