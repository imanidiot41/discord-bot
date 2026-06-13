const mongoose = require('mongoose');

const giveawaySchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  channelId: { type: String, required: true },
  messageId: { type: String, required: true },
  prize: { type: String, required: true },
  winners: { type: Number, required: true },
  participants: [String],
  winner: [String],
  endTime: { type: Date, required: true },
  ended: { type: Boolean, default: false },
  creatorId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Giveaway', giveawaySchema);