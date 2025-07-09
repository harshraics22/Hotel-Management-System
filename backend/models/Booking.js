const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  checkIn: Date,
  checkOut: Date,
  totalAmount: Number
});

module.exports = mongoose.model('Booking', bookingSchema);
