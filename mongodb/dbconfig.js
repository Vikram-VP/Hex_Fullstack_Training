//Vikram
//Vikram@123
/* mongodb+srv://Vikram:Vikram@123@trainingcluster.j9yf1.mongodb.net/jobportal_trainingdb?retryWrites=true&w=majority&appName=Trainingcluster*/

// mongoose: helps us connect to DB programatically and lets us perform DB ops

const mongoose = require('mongoose');// saves mongoos in variable

// now i can use this variable to call methods of mongoose

const dbConnect=async ()=>{
    try{
       await mongoose.connect('mongodb+srv://Vikram:Vikram%40123@trainingcluster.j9yf1.mongodb.net/jobportal_trainingdb?retryWrites=true&w=majority&appName=Trainingcluster');
       console.log('DB connected');
    }
    catch(err){
        console.log(`Error: ${err}`);
    }
}

module.exports=dbConnect;
//dbConnect();