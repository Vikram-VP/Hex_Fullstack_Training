const mongoose=require('mongoose');

const dbConnect=async()=>{
    try{
        await mongoose.connect('mongodb+srv://Vikram:Vikram%40123@trainingcluster.j9yf1.mongodb.net/Job_Portal?retryWrites=true&w=majority&appName=Trainingcluster');
        console.log('Connected to Database ');

    }
    catch(err){
        console.log('Error in connection '+err);
    }
}

module.exports=dbConnect;