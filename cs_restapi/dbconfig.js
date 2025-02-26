const mongoose = require("mongoose");

const dbConnect=async ()=>{
    try{
    await mongoose.connect('mongodb+srv://Vikram:Vikram%40123@trainingcluster.j9yf1.mongodb.net/Product_Model?retryWrites=true&w=majority&appName=Trainingcluster');
    console.log("Database connected");
    }
    catch(err){
        console.log(err)
    }
}
module.exports=dbConnect;
