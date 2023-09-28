const express = require("express");
const router = express.Router();

router.post("/foodData" , (req , res) => {
    try {
        // const responseData = [global.food_data,global.food_catogery];
        res.send([global.food_data,global.food_catogery]);
        // console.log(global.food_data);
        // console.log(global.food_Catogery);
    } catch (error) {
        console.error({error : error});
    }

})

 

 

module.exports = router;