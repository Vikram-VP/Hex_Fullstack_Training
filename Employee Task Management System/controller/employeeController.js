const Employee = require("../model/employee");
const bcrypt = require('bcryptjs');
const Admin=require('../model/admin');
const jwt=require('jsonwebtoken');


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
    let obj=req.user;
    let username=obj.username;
    let admin= Admin.findOne({'username':username})
    if(!admin)
        return res.status(401).json({'msg':'UnAuthorized Access'})
    const employees  = await Employee.find();
    return res.json(employees)
}

exports.login=async(req,res)=>{
    let {username,password}=req.body;

    let employee=Employee.findOne({'username':username})
    if(employee==undefined)
        return res.status(400).json({'msg':'Invalid Credentials'})

    let isValid=await bcrypt.compare(password,employee.password);
    if(isValid==undefined)
        return res.status(400).json({'msg':'Invalid Credentials'})

    const SECRET_KEY='15111983200722'
    let employeeObj= {
        'username':employee.username
    }
    const token=await jwt.sign(employeeObj,SECRET_KEY,{'expiresin':'20h'})
    res.json({'token':token})
}