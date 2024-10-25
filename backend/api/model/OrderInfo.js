const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    food: String,
    drink: String,
    address: String,
    city: String,
    state: String,
    apt: String,
    zip: String
  });
  
  const Order = mongoose.model('Order', orderSchema);


  module.exports = orderSchema;