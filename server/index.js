const mongoose = require('mongoose')
const mongoDB = require("./dbs/db")

const cors = require('cors');

const express = require("express")
const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api" , require("./Routes/CreatUser"))
app.use("/api" , require("./Routes/DisplayData"))
app.use("/api" , require("./Routes/Order"))
app.get('/' , (req , res)=>{
    res.send("Hello Thunder -------")
})
mongoDB();
app.listen(PORT , () => {
    console.log(`Server is running on ${PORT}`)
})

