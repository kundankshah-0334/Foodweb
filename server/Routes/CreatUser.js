const express = require("express");

const router = express.Router();

const User = require("../models/User");
const { query, validationResult } = require('express-validator');

router.post('/createuser' ,
    [
        query('name').isLength({min : 3}),
        query('email').isEmail(),
        query('password').isLength({min : 5}),
        query('location').isLength({min : 10}),
    ]
    , async (req , res) => {
     try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array() });
        }

        await User.create({
            name : req.body.name,
            location : req.body.location,
            email:req.body.email,
            password:req.body.password,
        })
        res.json({success : true});
    } catch (error) {
         res.json({success : false});
        
     }
})

module.exports = router ;