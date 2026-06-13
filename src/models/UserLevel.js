const mongoose = require('mongoose');

const userLevelSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  lastXpGainTime: { type: Date, default: Date.now },
});

userLevelSchema.index({ userId: 1, guildId: 1 }, { unique: true });

module.exports = mongoose.model('UserLevel', userLevelSchema);