const mongoose = require('mongoose')

const URL = "mongodb+srv://kundanlal96580:CLiyooZVYjX0fqa3@cluster0.5pd6vv9.mongodb.net/FoodOrder?retryWrites=true&w=majority";

const mongoDB = async () => {
    await mongoose.connect(URL , ()=>{
        console.log('Connected');
    })
}

module.exports = mongoDB;