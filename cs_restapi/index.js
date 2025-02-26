const express=require('express');
const dbConnect=require('./dbconfig');
const router = require('./routes/productroutes');
const app=express();
app.use(express.json());

dbConnect();
app.use('/api/product',router)
const PORT=process.env.PORT || 5002;
app.listen(PORT,()=>{console.log(`Express server is listening to Port ${PORT}`);});