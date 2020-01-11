const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Courier, Logins, ShopOwner, Customer } = require("../models/data");

router.post("/register", (req, res) => {
  const {
    email,
    name,
    password,
    password2,
    vehicleReg,
    ID,
    phone,
    shopLocation,
    shopName,
    deliveryLocation,
    role
  } = req.body;

  let errors;

  const saveDB=()=> {
    if (password !== password2) {
      errors = "passwords do not match";
      res.send({ err: errors });
    } else if (password && password.length < 6) {
      errors = "password should be at least 6 characters";
      res.send({ err: errors });
    } else {

      Logins.findOne({ email: email }).then(item => {
        if (item) {

          errors = "The account already exists";
          res.send({ err: errors });
        } else {
          const newUser = new Logins({
            email,
            password,
            role
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  const userRole = role.join("");
                  if (userRole == "courier") {
                    const newCourier = new Courier({
                      name,
                      email,
                      vehicleReg,
                      ID,
                      phone
                    });
                    newCourier
                      .save()
                      .then(() => res.send("Registration successful!"))
                      .catch(err => console.error(err.stack));
                  } else if (userRole == "shopOwner") {
                    const newShopOwner = new ShopOwner({
                      shopLocation,
                      shopName,
                      name,
                      email,
                      phone
                    });
                    newShopOwner
                      .save()
                      .then(() => res.send("Registration successful!"))
                      .catch(err => console.error(err.stack));
                  } else if (userRole == "customer") {
                    const newCustomer = new Customer({
                      deliveryLocation,
                      name,
                      email,
                      phone
                    });
                    newCustomer
                      .save()
                      .then(() => res.send("Registration successful!"))
                      .catch(err => console.error(err.stack));
                  }
                })
                .catch(err => console.error(err));
            });
          });
        }
      });
    }
  }

    if (role.join("") == "courier") {
      if (
        !name ||
        !email ||
        !password ||
        !password2 ||
        !vehicleReg ||
        !ID ||
        !phone
      ) {
        errors = "Please fill all fields courier";
        res.send({ err: errors });
      } else saveDB()
    } else if (role.join("") == "shopOwner") {
      if (
        !shopLocation ||
        !shopName ||
        !name ||
        !email ||
        !password ||
        !password2 ||
        !phone
      ) {
        errors = "Please fill all fields shopowner";
        res.send({ err: errors });
      } else saveDB()
    } else if (role.join("") == "customer") {
      if (
        !deliveryLocation ||
        !name ||
        !email ||
        !password ||
        !password2 ||
        !phone
      ) {
        errors = "Please fill all fields customer";
        res.send({ err: errors });
      } else {
        saveDB()}
    }
  
  

});
module.exports = router;
