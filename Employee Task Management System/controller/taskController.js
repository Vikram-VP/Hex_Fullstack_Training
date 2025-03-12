const Project = require("../model/project");
const Task = require("../model/task");
const mongoose=require('mongoose');

exports.addTask=async (req,res)=>{
    let user=req.user;

    let username=user.username;
    // i have to verify it is admins username

    let admin= await Admin.findOne({'username':username})
    if(!admin)
        return res.status(401).json({'msg':'Unauthorised access for user:'+username})

    const pid = req.params.pid; 
    let {title, shortDescription, estimatedEndDate} = req.body; 
    if (!mongoose.Types.ObjectId.isValid(pid)) {
        return res.status(400).json({ msg: "Invalid project ID format." });
    }
    //validate this pid 
    let project = await Project.findById(pid); 
    if(!project)
        return res.status(400).json({'msg' : 'Invalid project Id given..'})

    let task = new Task({title, shortDescription, estimatedEndDate, 
        'project':project._id });
    task = await task.save();
    return res.json(task);
}

exports.getAllTasks =async (req,res)=>{
    let tasks = await Task.find().populate('project','title clientName -_id');
    res.json(tasks)
}

exports.getTask=async(req,res)=>{
    try{
        const task=await Task.findById(req.params.id).populate("project");
        if(!task){
            return res.status(400).json({ message: "Task not found" });
    }
    res.json(task);
    }catch(err){
        res.status(400).json({ message: "API error", error });
    }
}