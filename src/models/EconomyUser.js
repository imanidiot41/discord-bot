const mongoose = require('mongoose');

const economyUserSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  balance: { type: Number, default: 1000 },
  bank: { type: Number, default: 0 },
  lastDaily: { type: Date, default: null },
  lastWork: { type: Date, default: null },
  lastRob: { type: Date, default: null },
  inventory: [{
    itemId: String,
    quantity: Number,
  }],
});

economyUserSchema.index({ userId: 1, guildId: 1 }, { unique: true });

module.exports = mongoose.model('EconomyUser', economyUserSchema);