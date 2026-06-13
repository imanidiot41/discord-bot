const mongoose = require('mongoose');

const shopItemSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, default: '' },
  roleId: { type: String }, // For role-granting items
  type: { type: String, enum: ['role', 'item', 'badge'], default: 'item' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ShopItem', shopItemSchema);