 const mongoose = require("mongoose");

 const taskSchema = mongoose.Schema({
    title : {type:String , unique:true , trim:true , required:true},
    description : {type:String , trim:true , required:true},
    status : {type:Number , required:true , default : 0 }

 },{timestamps:true})

 const taskModel = mongoose.model("task",taskSchema);
 module.exports = taskModel;