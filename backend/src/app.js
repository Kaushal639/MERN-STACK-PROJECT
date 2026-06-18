const express = require("express");
const mongoose = require("./db/db");
const cors = require("cors");
const bodyparser = require("body-parser");
const usermodel = require("./model/userschema");

require("dotenv").config();

const dns = require("node:dns");

// Set global custom DNS servers (e.g., Google Public DNS)
dns.setServers(["8.8.8.8", "8.8.4.4"]);
console.log("Active DNS servers:", dns.getServers());

mongoose();
const app = express();
app.use(express.json());
app.use(bodyparser.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || true,
    methods: ["get", "post"],
    credentials: true,
  })
);

app.post("/signup", (req, res) => {
  const user = req.body;
  usermodel.create({
    name: user.name,
    email: user.email,
    password: user.password,
    mobile: user.mobile,
    pincode: user.pincode,
    address: user.address,
  });
  res.status(200).json({message:"note created sucessfully "});
});

app.get("/signup", (req, res) => {
  res.send("this is port 3000");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: "email and password are required" });
    }

    // Passwords are stored as a bcrypt hash (see backend/api/login.js + signup.js logic)
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const validuser=await usermodel.findOne({email:user.email,password:user.password})
    if(validuser){
      res.send("user login sucessfull",{email:user.email})
      console.log("user logged in", {user:user.email})
    }

    
  } catch(error){
    console.error("login error",error)
  }
});

app.get("/", async (req, res) => {
  await res.send("your backend is running");
});

module.exports = app;

