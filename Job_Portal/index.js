const express=require('express');
const dbConnect=require('./config/dconfig');
const app=express();
const adminRoute=require('./routes/adminRoute');
const applicationRoute=require('./routes/applicationRoute');
const jobRoute=require('./routes/jobRoute');
const userRoute=require('./routes/userRoute');
const authRoute=require('./routes/authRoute');
var cors=require('cors');



const Port=process.env.Port || 5003;
app.use(express.json());
app.use(cors());

dbConnect();

app.use('/api/admin',adminRoute);
app.use('/api/apply',applicationRoute);
app.use('/api/job',jobRoute);
app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);

app.listen(Port,()=>console.log('Server is listening on port'+Port));// made to listen to the port 
