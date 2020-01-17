const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const path = require("path")
require("dotenv").config()
const port = process.env.PORT || 4000;

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connected successfully"))
  .catch(err => console.error(err.stack));

require("./config/passport")(passport);
app.use(express.static("build"))
app.use(express.static("public"))
// Express session
app.use(
  session({
    secret: "mySecretkey",
    resave: true,
    saveUninitialized: true
  })
);

app.get("*", (req,res)=>{
  res.sendFile(path.join(__dirname, "../../dist", "index.html"))
})

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes"));

app.listen(port, () => console.log(`server running on port ${port}`));
