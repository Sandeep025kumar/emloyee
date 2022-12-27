const { findByIdAndUpdate } = require('../model/student');
const employeeSchema = require('../model/student');
const employeeData = async(req,res)=>{
     const employee = new employeeSchema({
        ...req.body
     })
     const data = await employee.save();
     res.json(data);
}
const listData = async(req,res)=>{
    const listGet = await employeeSchema.find({}).sort({'regNo':-1});
    res.json(listGet)
}
const singleData = async(req,res)=>{
    const viewData = await employeeSchema.findById(regNo=req.params);
    if(!viewData) return res.json("regNo not valid")
    const data = await employeeSchema.find(regNo=req.params);
    res.json(data);
}
const upData = async(req,res)=>{
    const {name,email,phone} = req.body;
    const datas = await employeeSchema.findByIdAndUpdate(req.params.id,{
        $set:{
            name:name,
            email:email,
            phone:phone
        }
    },{new:true})
    res.json({msg:"updated successfully",data:datas})
}
const deleteData = async(req,res)=>{
    const removeData = await employeeSchema.findByIdAndDelete(req.params.id)
    res.json({msg:"data deleted successfully"})
}
module.exports = {employeeData,listData,singleData,upData,deleteData}