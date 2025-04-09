const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  purchesAt: {
    type: Date,
    default: Date.now(),
  },
});

const Orders = mongoose.model("Orders", OrdersSchema);

module.exports = Orders;
