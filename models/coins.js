const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coinSchema = new Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  notes: String,
  date: { type: Date, default: Date.now }
});

const Coin = mongoose.model("Coin", coinSchema);

module.exports = Coin;
