const express = require('express');
const dbConnect = require('./config/dbConfig');
const app = express(); 
const employeeRoute = require('./route/employeeRoute');
const projectRoute = require('./route/projectRoute');
const taskRoute = require('./route/taskRoute');
const assignRoute = require('./route/assignRoute');
const adminRoute=require('./route/adminRoute')
const authRoute=require('./route/authRoute')
const commentRoute=require('./route/commentRoute')
var cors = require('cors')
const { json } = require('body-parser');

const $PORT = process.env.$PORT || 5004; 

app.use(express.json())
app.use(cors())

dbConnect();
app.use('/api/auth',authRoute)
app.use('/api/employee', employeeRoute)
app.use('/api/project', projectRoute)
app.use('/api/task', taskRoute)
app.use('/api/assign', assignRoute)
app.use('/api/admin',adminRoute)
app.use('/api/comment', commentRoute)

app.listen($PORT, ()=> console.log(`Server listening on port ${$PORT}`))