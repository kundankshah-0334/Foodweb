// import mongoose from "mongoose";
const mongoose = require('mongoose')
const mongoDB = require("./dbs/db")
// import  express  from "express";
const express = require("express")
const PORT = 8000;
const app = express();
app.use(express.json());
app.use("/api" , require("./Routes/CreatUser"))
app.get('/' , (req , res)=>{
    res.send("Hello Thunder -------")
})
mongoDB();
// console.log(conn);
app.listen(PORT , () => {
    console.log(`Server is running on ${PORT}`)
})

