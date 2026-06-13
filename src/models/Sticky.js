const mongoose = require('mongoose');

const stickySchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  channelId: { type: String, required: true },
  content: { type: String, required: true },
  messageId: { type: String },
  createdAt: { type: Date, default: Date.now },
});

stickySchema.index({ guildId: 1, channelId: 1 }, { unique: true });

module.exports = mongoose.model('Sticky', stickySchema);