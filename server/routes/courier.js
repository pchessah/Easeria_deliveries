const router = require("express").Router();

router.post("/register", (req,res)=> {
    const {email, password, password2, vehicleReg, ID, phone} = req.body
    let errors
    if (!email || !password || !password2 || !vehicleReg || !ID || !phone){
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
    // else {

    // }
})
module.exports = router