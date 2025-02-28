const Admin = require("../model/admin");
const Employee = require("../model/employee");

exports.getUserInfo = async (req,res)=>{
    try {
        obj = req.user
        let username = obj.username

        let admin = await Admin.findOne({ 'username': username });
        if (admin)
            return res.json(admin)

        let employee = await Employee.findOne({ 'username': username })
        if (employee)
            return res.json(employee)

        res.status(400).json({ 'msg': 'login denied!!' })
    }
    catch(err){
        return res.status(400).json(err)
    }

}