const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
      name:{
        type:String,
        required:true,
      },
      regNo:{
        type:Number,
        unique:true,
      },
      email:{
        type:String,
        required:true,
      },
      phone:{
        type:Number,
        required:true,
      },
},{timestamps:true})
module.exports=mongoose.model('employee',employeeSchema)