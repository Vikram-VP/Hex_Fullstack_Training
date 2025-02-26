const mongoose=require('mongoose');

const teachesSchema=new mongoose.Schema({
    courseid:{type: mongoose.Schema.Types.ObjectId,ref:'Courses',required:true},
    instructorid:{type: mongoose.Schema.Types.ObjectId,ref:"Instructor",required:true}
})

const Teaches= mongoose.model("Teaches",teachesSchema);
module.exports=Teaches;
