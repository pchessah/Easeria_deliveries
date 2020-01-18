const router = require("express").Router();
const { Courier, Customer, ShopOwner, Logins, ProductSchema} = require("../models/data")
const path = require ("path")


router.post("/addproduct", (req, res, next)=>{
    const {productName, productPrice, category, description, image } = req.body;

    image.mv(path.join(__dirname,"/uploads", image.name))
    .then(()=>console.log("success chessah"))
    .catch(err=>console.log(err.stack))
    
    console.log(image)
   

})

module.exports = router