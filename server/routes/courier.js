const router = require("express").Router();
const { Courier, Customer, ShopOwner, Logins, ProductSchema} = require("../models/data")

router.post("/addproduct", (req, res)=>{
    const {productName, productPrice, category, description, image } = req.body;
    
    console.log(req.body)

})

module.exports = router