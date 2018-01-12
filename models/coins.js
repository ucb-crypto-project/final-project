const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coinSchema = new Schema({
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  notes: String,
  date: { type: Date, default: Date.now }
});

const Coin = mongoose.model("Coin", coinSchema);

module.exports = Coin;
