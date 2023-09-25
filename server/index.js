// import mongoose from "mongoose";
const mongoose = require('mongoose')
const mongoDB = require("./dbs/db")
// import  express  from "express";
const express = require("express")
const PORT = 8000;
const app = express();

mongoDB();
// console.log(conn);
app.listen(PORT , () => {
    console.log(`Server is running on ${PORT}`)
})

