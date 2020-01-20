const router = require("express").Router();
const { Courier, Customer, ShopOwner, Logins, ProductSchema} = require("../models/data")
const path = require ("path")



router.post("/addproduct", (req, res, next)=>{
    const {productName, productPrice, category, description } = req.body;
    const {image}=req.files
  
console.log(req.files);
    image.mv(path.join(__dirname,"../../uploads", image.name))
    .then(()=>res.send("success chessah"))
    .catch(err=>console.log(err.stack))
    
    console.log(image)
   

})

module.exports = router
