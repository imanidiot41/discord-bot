const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  name: { type: String, required: true },
  content: { type: String, required: true },
  creatorId: { type: String, required: true },
  uses: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

tagSchema.index({ guildId: 1, name: 1 }, { unique: true });

module.exports = mongoose.model('Tag', tagSchema);