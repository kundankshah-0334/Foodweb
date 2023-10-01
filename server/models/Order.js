const mongoose = require("mongoose");

const Orderschema = mongoose.Schema({
     email : {
        type : String,
        required : true,
    },
     order_data: {
        type : Array,
        required : true,
    },
})
module.exports = mongoose.model("order" ,Orderschema);