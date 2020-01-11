const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  ID: { required: true, unique: true, type: Number },
  name: { required: true, type: String },
  email: { required: true, unique: true, type: String },
  phone: { required: true, type: Number },
  vehicleReg: { required: true, unique: true, type: String },
  password:{required: true, unique:true, type:String}
});

const Courier = mongoose.model("Courier", userSchema)
module.exports = {Courier}
