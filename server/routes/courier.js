const router = require("express").Router();
const bcrypt =require("bcrypt")
const {Courier} = require ("../models/data")

router.post("/register", (req,res)=> {
    const {email, password, password2, vehicleReg, ID, phone} = req.body
    let errors
    if (!name || !email || !password || !password2 || !vehicleReg || !ID || !phone){
        errors = "Please fill all fields"
        res.send ({err:errors})
    }
    else if (password !== password2){
        errors = "passwords do not match"
        res.send ({err: errors})
    }
    else if (password && password.length < 6){
        errors = "password should be at least 6 characters"
        res.send({err:errors})
    }
    else {
        Courier.findOne({email:email})
        .then(item=>{
            if(item){
                errors = "The account already exists";
                res.send({err:errors})
            }
            else{
                const newUser = new Courier({
                    email, password, vehicleReg, ID, phone
                })
                bcrypt.genSalt(10, (err, salt)=>{
                    bcrypt.hash(password, salt, (err, hash)=>{
                        if (err) throw err;
                        newUser.password=hash;
                        newUser.save().then(user=>{
                            res.send("Registration successful!")
                        })
                        .catch(err=>console.error(err))
                    })
                })

            }
        })
    }
})
module.exports = router