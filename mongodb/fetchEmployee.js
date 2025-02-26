const dbConnect=require('./dbconfig');
const mongoose=require('mongoose');
const Employee=require('./employee');

const fetchEmployee=async()=>{
    try{
        await dbConnect();
        //since i am fetching the data from DB, i wont prepare the data
        const empArray=await Employee.find();
        empArray.forEach((e)=>
            console.log(e))
    }
    catch(err){
        console.log(err);
    }
    finally{
        mongoose.connection.close();
        console.log("DB connection closed")

    }
    
}

fetchEmployee();