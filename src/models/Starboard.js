const mongoose = require('mongoose');

const starboardSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  channelId: { type: String, required: true },
  messageId: { type: String, required: true },
  starboardMessageId: { type: String, required: true },
  reactions: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
});

starboardSchema.index({ guildId: 1, messageId: 1 }, { unique: true });

module.exports = mongoose.model('Starboard', starboardSchema);