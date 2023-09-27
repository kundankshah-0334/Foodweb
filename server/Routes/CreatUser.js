const express = require("express");

const router = express.Router();

const User = require("../models/User");
const { body, validationResult } = require('express-validator');

router.post('/createuser' ,
    
[body('name').isLength({min : 3}),
        body('email').isEmail(),
        body('password').isLength({min : 5}),
        body('geolocation').isLength({min : 10})] ,

    async (req , res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array() });
        }
     try {

        await User.create({
            name : req.body.name,
            location : req.body.geolocation,
            email:req.body.email,
            password:req.body.password,
        }).then(res.json({success : true})) ;
    } catch (error) {
            console.log(error); // Log the error for debugging
            res.json({ success: false }); // Return the error message in the response
        }
})

module.exports = router;