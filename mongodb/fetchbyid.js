const dbConnect=require('./dbconfig');
const mongoose=require('mongoose');
const Employee=require('./employee');

// fetch employee by id
const fetchById=async(empId)=>{
    try{
        await dbConnect();
        const emp=await Employee.findOne({_id:empId});
        if(!emp)
            console.log("Employee not found");
        else
            console.log(emp);
    }
    catch(err){
        console.log(err);
    }
    finally{
        mongoose.connection.close();
        console.log("DB connection closed")
    }
}

// fetch by properties like name

const fetchByName=async(name)=>{
    try{
        await dbConnect();
        let fname = name.split(' ')[0];
        let lname = name.split(' ')[1] || '';

        const emp=await Employee.find({'fname':fname,'lname':lname});
        if(!emp)
            console.log("Employee not found");
        else
            console.log(emp);
        }
    
    catch(err){
        console.log(err);
        }
    finally{
        mongoose.connection.close();
        console.log("DB connection closed")
        }


}
//fetchById('67b5825c67537a43f0b803fe');
fetchByName('Ronald Weasley');
