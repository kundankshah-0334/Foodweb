// import mongoose from "mongoose";
const mongoose = require('mongoose')
// const mongoDB = require("./dbs/db")
// import  express  from "express";
const express = require("express")
const PORT = 8000;
const app = express();


// const conn =  mongoose.connect("mongodb+srv://kundanlal96580:CLiyooZVYjX0fqa3@cluster0.5pd6vv9.mongodb.net/FoodOrder?retryWrites=true&w=majority");

const mongoDB = async () => {
   await mongoose.connect("mongodb+srv://kundanlal96580:CLiyooZVYjX0fqa3@cluster0.5pd6vv9.mongodb.net/FoodOrder?retryWrites=true&w=majority");
   // Handle connection events
const db = mongoose.connection;
console.log(db)
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});
}

mongoDB();
// console.log(conn);
app.listen(PORT , () => {
    console.log(`Server is running on ${PORT}`)
})

