const Employee = require("../model/employee");
const bcrypt = require('bcryptjs')

exports.addEmployee= async (req,res)=>{
    try{
        let {name,jobTitle,city,salary,profilePic,cv,username,password} = req.body; 
    //encrype/encode the password
    let salt = 10; //needed for hash algo: SHA256 
    const hashedPassword = await bcrypt.hash(password,salt); 
    let employee = new Employee({name,jobTitle,city,salary,profilePic,cv,username,'password': hashedPassword})

    employee = await employee.save();
    return res.status(200).json(employee); 
    }
    catch(err){
        return res.status(400).json(err)
    }
}

exports.getAllEmployee=async (req,res)=>{
    const employees  = await Employee.find();
    return res.json(employees)
}
