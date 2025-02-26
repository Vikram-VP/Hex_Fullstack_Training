const dbConnect=require('./dbconfig');
const mongoose=require('mongoose');
const Employee=require('./employee');;

async function addEmployee(){
    try{
        await dbConnect();
        // preparing new employee data
        let emp1={
            fname:'ronald',
            lname:'weasley',
            city:'uk',
            salary:'88000'
        }

        const empObj = new Employee(emp1);//preparing the employee object
        await empObj.save(); // saving the employee object
        //save method will now save the employee object in DB
        console.log('Employee added to DB');
    
    }
    catch(err){
        console.log(err);
    }
    finally{
        /* this block is always executed regardless of whether your code works or not and so this is an ideal place to closer the DB connection */
        mongoose.connection.close();
        console.log("DB connection closed")  
    }
    
}

addEmployee();

// ctrl+c to terminate console
