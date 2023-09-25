const mongoose = require('mongoose')

const URL = "mongodb+srv://kundanlal96580:CLiyooZVYjX0fqa3@cluster0.5pd6vv9.mongodb.net/FoodOrder?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
        mongoose.connect(URL);
        console.log('db connected');
    } catch (error) {
        console.log('db not connected',error);
    }
   
}

module.exports = mongoDB;