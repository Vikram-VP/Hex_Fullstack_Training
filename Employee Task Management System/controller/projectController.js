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
    let {page,size}=req.query;
    page=parseInt(page) || 1;
    size=parseInt(size) || 2;

    //console.log(page+ "----" +size)
    /**
     * 
     * size=2
     * Algorithm
     * when page==1 then the skip =0  [1,2]
     * when page ==2 then the skip = 2 [3,4]
     * when page==3 then the skip = 4 [5,6]
     * 
     */

    let skip=(page-1)*size;

    const projects = await Project.find().skip(skip).limit(size);
    let totalRecords=await Project.countDocuments();
    let totalPages= Math.ceil(totalRecords/size);


    res.json({
        'totalRecords':totalRecords,
        'totalPages':totalPages,
        'currentPage':page,
        'data':projects
    });
}