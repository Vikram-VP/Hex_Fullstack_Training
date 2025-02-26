const Admin = require("../model/admin");
const Project = require("../model/project");

exports.addProject=async (req,res)=>{

    let user=req.user;

    let username=user.username;
    // i have to verify it is admins username

    let admin= await Admin.findOne({'username':username})
    if(!admin)
        return res.status(401).json({'msg':'Unauthorised access for user:'+username})

    let {title,shortDescription,estimatedEndDate,clientName,techStack} = req.body;
    
    let project = new Project({title,shortDescription,estimatedEndDate,clientName,techStack})
    project = await project.save();
    res.json(project);
}

exports.getAllProject = async (req,res)=>{
    const projects = await Project.find();
    res.json(projects);
}