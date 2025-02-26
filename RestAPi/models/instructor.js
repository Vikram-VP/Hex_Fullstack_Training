const mongoose=require('mongoose');

const instructorSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String},
    city:{type:String}
})

const Instructor=mongoose.model("Instructor",instructorSchema);

module.exports=Instructor;
