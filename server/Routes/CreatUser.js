const express = require("express");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = express.Router();
const jwtSecret = "kdfgssdfhsdflbdfghsdfuiruusiuuhsdfuhbnsdf"
var salt = bcrypt.genSaltSync(10);

const User = require("../models/User");
const { body, validationResult } = require('express-validator');

router.post('/createuser' ,
       [
        body('name').isLength({min : 3}),
        body('email').isEmail(),
        body('password').isLength({min : 5}),
        body('geolocation').isLength({min : 10})
    ] ,
    async (req , res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array() });
        }
     try {
        var hash = bcrypt.hashSync(req.body.password, salt);

        await User.create({
            name : req.body.name,
            location : req.body.geolocation,
            email:req.body.email,
            password:hash,
        }).then(res.json({success : true})) ;
    } catch (error) {
            console.log(error); // Log the error for debugging
            res.json({ success: false }); // Return the error message in the response
        }
})

router.post('/loginuser' ,
       [
        body('email').isEmail(),
        body('password').isLength({min : 5}),
    ] ,
    async (req , res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array() });
        }
        const email = req.body.email;
     try {

        
        let userData =  await User.findOne({email});
        if(!userData){
            return res.status(400).json({errors : "Try again with valid credentials " });
        }
        const decrypt_pass =  bcrypt.compareSync(req.body.password , userData.password); // true
      
        if(decrypt_pass){
            // return res.status(400).json({errors : "Try again with valid credentials" });
            const data = {
                user : {
                    id : userData.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret)
            return res.json({success : true , authToken : authToken});
        }
        else{
            return res.status(400).json({errors : "Try again with valid credentials  " });
            // return res.json({success : "false 1" });
            
        }
   
    } catch (error) {
            console.log(error); // Log the error for debugging
            res.json({ success: false }); // Return the error message in the response
        }
})

module.exports = router;