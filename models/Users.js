const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobileNumber: Number,
  address: String,
  city: String,
  zipcode: Number,
  nameOnCard: String,
  cardNumber: Number,
  expiryDate: String,
  cvv: Number,
  billAmount: Number,
});

const UserModel = mongoose.model("items", UserSchema);
module.exports = UserModel;
