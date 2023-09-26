const mongoose = require('mongoose')

const URL = "mongodb+srv://kundanlal96580:CLiyooZVYjX0fqa3@cluster0.5pd6vv9.mongodb.net/FoodOrder?retryWrites=true&w=majority";

const mongoDB = async () => {

        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            const Data = async() =>{
                console.log('Connected to MongoDB');

                const fetched_data = await mongoose.connection.db.collection("food_data");
                // console.log(fetched_data);
                const data = await fetched_data.find({}).toArray();
                // console.log(data);
            }
            Data();

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
   
}

module.exports = mongoDB;