require("dotenv").config();
const app=require("./src/app.js");


app.listen(process.env.PORT,()=>{
    console.log("you are on port 3000")
})
