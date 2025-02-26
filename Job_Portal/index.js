const express=require('express');
const dbConnect=require('./config/dconfig');
const app=express();
const{adminRoute}=require('./routes/adminRoute');
const{applicationRoute}=require('./routes/applicationRoute');


const Port=process.env.Port || 5003;
app.use(express.json());

dbConnect();

app.use('api/admin',adminRoute);
app.use('/api/application',applicationRoute);

app.listen(Port,()=>console.log('Server is listening on port'+Port));// made to listen to the port 
