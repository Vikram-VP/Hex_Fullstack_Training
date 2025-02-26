const dbConnect=require('./dbconfig');
const mongoose=require('mongoose');
const Employee=require('./employee');
const deleteemployee=async (empId)=>{
    try{
       await dbConnect();
       const resp=await Employee.deleteOne({'_id':empId});
       console.log(resp);
       if(resp.deletedCount===0)
        console.log("Employee not found");
       else
        console.log("Employee deleted");
    }
    catch(err){
        console.log(`Error: ${err}`);
    }
    finally{
        mongoose.connection.close();
        console.log("DB connection closed")
    }
}

deleteemployee('67b58cc0e262146d97b22bf8');