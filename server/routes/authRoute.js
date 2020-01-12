const router = require("express").Router();
// const passport = require ("passport")
const {Logins} =require("../models/data")
const bcrypt = require ("bcrypt")
router.post('/login', (req, res, next) => {
    // passport.authenticate('local',

    //  {
    //   successMessage: 'logged in!',
    //   failureFlash: 'failed',
    //   failureFlash: true
    // }
    // )(req, res, next);
    const {email, password} = req.body;
    Logins.findOne({email:email}, (err, data)=>{
        if (err) throw err;
        else {
            if(!data){
                res.send("The email is not registered")
            }
            else if(data){
                bcrypt.compare(password, data.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                      res.send(data)
                    } else {
                      res.send("The password is incorrect");
                    }
                  });
                
            }
        }
    })
  });
  
  // Logout
  router.get('/logout', (req, res) => {
    req.logout();
    // res.redirect('/users/login');
  });
  

module.exports = router