const mongoose = require('mongoose');

const countingSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  channelId: { type: String, required: true },
  currentCount: { type: Number, default: 0 },
  lastCountedBy: { type: String },
  highestCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

countingSchema.index({ guildId: 1, channelId: 1 }, { unique: true });

module.exports = mongoose.model('Counting', countingSchema);