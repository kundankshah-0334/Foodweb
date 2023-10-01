const express = require("express");
const router = express.Router();
const Order = require('../models/Order')

router.post("/orderData" ,async (req , res) => {
    let Data = req.body.order_data;

    await Data.splice(0 , 0 , {order_date  : req.body.order_date})
    let eID = await Order.findOne({ "email": req.body.email })
    console.log(eID);
    if(eID ===  null){

        console.log(" enterting inside IF");
        try {
            await Order.create({
                email : req.body.email,
                order_data : [Data]
            }).then(()=>{
                res.json({success : true})
            })
            
        } catch (error) {
            console.error({error : error});
            res.send("Error in OrderFood" + error.message);
        }
    }
    else{
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: Data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }

})

router.post("/myOrderData" ,async (req , res) => {
    try {
        let myData = await Order.findOne({email : req.body.email});
        res.json({orderData : myData})
    } catch (error) {
        res.send("Server Error", error.message)
    }
})


module.exports = router;