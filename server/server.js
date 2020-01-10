const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const port = process.env.PORT || 4000;

const app = express();

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require ("./routes"))

app.listen(port, () => console.log(`server running on port ${port}`));
