const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const {PORT,DB} = process.env;
const mongoose = require('mongoose');
const router = require('./app/routerRout/employee');
mongoose.connect(DB)
.then(()=>{
    console.log("Db connected successfully");
})
.catch((err)=>{
    console.log("Db is not connected",err);
})
app.use(express.json());
app.use('/api',router)
app.listen(PORT,()=>{
    console.log("Server is running on port:",PORT);
})