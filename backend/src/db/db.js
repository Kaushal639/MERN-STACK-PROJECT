const mongoose=require("mongoose")
require("dotenv").config();
//pass= 0r8PgPcySDI05JLA
//mongodb+srv://Kaushal:0r8PgPcySDI05JLA@cluster0.l8lxxht.mongodb.net/?appName=Cluster0
async function connect_db(){
await mongoose.connect(process.env.DB_URL);     

console.log("connected to db")
}               
module.exports=connect_db;

