const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  isAvailable: Boolean
});

module.exports = mongoose.model('Room', roomSchema);
