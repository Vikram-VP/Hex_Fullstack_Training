const Employee = require("../model/employee");
const Comment=require("../model/comment")

exports.addComment=async(req,res)=>{
    let user=req.user;
    let username=user.username;
    let employee = await Employee.findOne({ username: username });

    if (employee === undefined || employee == null)
      return res.status(400).json({ msg: "Invalid Credentials!!" });
    let {message,task}=req.body;
    let comment= new Comment({username,message,task})
    comment=await comment.save()
    res.json(comment)
}

exports.getCommentsByTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const comments = await Comment.find({ task: taskId }).sort({ commentDate: -1 });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ msg: "Error fetching comments" });
    }
};