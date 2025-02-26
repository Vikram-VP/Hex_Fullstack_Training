/** Setting up the express server */

const express = require('express');
const dbConnect = require('./dbConfig');
const app = express();//henceforth app is our main server variable
const courseRoute=require('./routes/courseRoute');
const studentRoute=require('./routes/studentRoute');
const enrollRoute=require('./routes/enrollRoute');
const userRoute=require('./routes/userRouter');

// body-parser to read json
app.use(express.json());

//connect to mongoDB
dbConnect();

//reach out to routes
app.use('/api/course',courseRoute);
app.use('/api/student',studentRoute);
app.use('/api/enroll',enrollRoute);
app.use('/api/user',userRoute);

const PORT = process.env.PORT || 5001;
app.listen(PORT,()=>console.log(`express server is listening to port ${PORT}`));

//process.env.PORT - this to read cloud server's port number
