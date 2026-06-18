const mongoose=require("mongoose")
const userschema= new mongoose.Schema({
    name:String,
    email:{type:String , unique:true},
    password:String,
    mobile:Number,
    address:String,
    pincode:Number
})

const usermodel=mongoose.model("user",userschema);
module.exports=usermodel;