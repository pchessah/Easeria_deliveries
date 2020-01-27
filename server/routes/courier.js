const router = require("express").Router();

const {
  Courier,
  Customer,
  ShopOwner,
  Logins,
  Products
} = require("../models/data");
const path = require("path");

let imgname;
router.post("/addproduct", (req, res, next) => {
  const imageName = n => {
    let nm;
    if (n.mimetype === "image/png") {
      nm = `${Date.now()}.png`;
    } else if (n.mimetype === "image/jpeg") {
      nm = `${Date.now()}.jpeg`;
    }
    return nm;
  };
  if (Object.keys(req.body).length > 0) {
    console.log(req.body);
    const newProduct = new Products({ ...req.body, image: imgname });
    newProduct
      .save()
      .then(() => {
        res.send("Saved Successfully!");
      })
      .catch(err => console.log(err));
  }
  if (req.files) {
    const { image } = req.files;
    const imgVar = imageName(image);
    image.mv(path.join(__dirname, "../../uploads", imgVar));
    imgname = imgVar;
    console.log(imgVar);
  }
});
console.log("../../uploads/1579528013892.jpeg");
router.post("/products", function(req, res) {
  Products.find(function(err, products) {
    console.log("../../uploads/1579528320914.jpeg");
    // res.json(products);
    res.send({img:"../../uploads/1579528320914.jpeg"})
  });
});

router.get("/products/:id", function(req, res) {
  Products.findById(req.params.id, function(err, product) {
    if (!product) {
      res.status(404).send("No product found");
    } else {
      res.json(product);
    }
  });
});

module.exports = router;
