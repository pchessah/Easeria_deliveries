const mongoose = require("mongoose");

const courierSchema = new mongoose.Schema({
  ID: { required: true, unique: true, type: Number },
  name: { required: true, type: String },
  email: { required: true, unique: true, type: String },
  phone: { required: true, type: Number },
  vehicleReg: { required: true, unique: true, type: String }
});

const customerSchema = new mongoose.Schema({
  email: { required: true, unique: true, type: String },
  phone: { required: true, type: Number },
  name: { required: true, type: String },
  deliveryLocation: { required: true, type: String }
});

const shopOwnerSchema = new mongoose.Schema({
  email: { required: true, unique: true, type: String },
  name: { required: true, type: String },
  phone: { required: true, type: Number },
  shopName: { required: true, unique: true, type: String },
  shopLocation: { required: true, type: String }
});

const loginsSchema = new mongoose.Schema({
  email: { required: true, unique: true, type: String },
  password: { required: true, type: String },
  role: { type: Object, required: true }
});

const productSchema = new mongoose.Schema({
  productName: { required: true, type: String },
  description: { required: true, type: String },
  category: { required: true, type: String },
  productPrice: { required: true, type: Number },
  image: { required: true, type: Object }
});

const Customer = mongoose.model("Customer", customerSchema);
const Courier = mongoose.model("Courier", courierSchema);
const ShopOwner = mongoose.model("ShopOwner", shopOwnerSchema);
const Logins = mongoose.model("Logins", loginsSchema);
const Products = mongoose.model("Products", productSchema);

module.exports = { Courier, Customer, ShopOwner, Logins, Products };
