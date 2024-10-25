const express = require('express');
const routes = express.Router();
const orderInfo = require('../model/OrderInfo');


routes.post('submit-order', async (req, res) => {
    try {
      const { food, drink, address, city, state, apt, zip } = req.body;
  
      // Create a new order document in MongoDB
      const newOrder = new Order({
        food,
        drink,
        address,
        city,
        state,
        apt,
        zip,
      });
  
      await newOrder.save();
  
      res.status(200).json({ message: 'Order saved successfully!' });
    } catch (err) {
      res.status(500).json({ message: 'Error saving order', error: err.message });
    }
  });

  module.exports = routes;