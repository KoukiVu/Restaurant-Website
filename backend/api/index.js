const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://quanghuyvudang:Picky123456.@wcoproject.f6ljb.mongodb.net/Order?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Create Order Schema and Model

// Define order schema
const orderSchema = new mongoose.Schema({
    food: String,
    drink: String,
    address: String,
    city: String,
    state: String,
    apt: String,
    zip: String,
  });
  
  // Create the Order model
  const Order = mongoose.model('Order', orderSchema);
  
  // Route to handle the order submission
  app.post('/submit-order', async (req, res) => {
    const { food, drink, address, city, state, apt, zip } = req.body;
  
    try {
      // Create a new order
      const newOrder = new Order({
        food,
        drink,
        address,
        city,
        state,
        apt,
        zip,
      });
  
      // Save the order to the database
      await newOrder.save();
  
      // Send a success response
      res.status(201).json({ message: 'Order submitted successfully!' });
    } catch (error) {
      console.error('Error saving order:', error);
      res.status(500).json({ error: 'Failed to submit order' });
    }
  });



app.route("/").get((req, res) => {
    res.send("<h1>hello</h1>")
})
// Create an API endpoint to handle order submission


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
