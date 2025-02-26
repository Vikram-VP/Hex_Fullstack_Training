const mongoose=require('mongoose');
const applicationSChema=new mongoose.Schema({
    "job":{type:mongoose.Types.ObjectId,ref:"Job",required:true},
    "user":{type:mongoose.Types.ObjectId,ref:"User",required:true},
    "appliedDate":{type:Date,default:Date.now}
})

const Application=mongoose.model("Application",applicationSChema);

module.exports=Application;