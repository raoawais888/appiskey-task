 const mongoose = require("mongoose");

 const listSchema = mongoose.Schema({
    title : {type:String , unique:true , trim:true , required:true},
    description : {type:String , trim:true , required:true},
    status : {type:Number , required:true , default : 0 }

 },{timestamps:true})

 const listModel = mongoose.model("list",listSchema);
 module.exports = listModel;