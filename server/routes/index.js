const router = require("express").Router();

router.use ("/",require("./courier"))
router.use("/register", require("./register"))
router.use("/", require("./authRoute"))

module.exports = router