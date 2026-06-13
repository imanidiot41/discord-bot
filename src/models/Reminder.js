const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  remindAt: { type: Date, required: true },
  channelId: { type: String, required: true },
  guildId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reminder', reminderSchema);