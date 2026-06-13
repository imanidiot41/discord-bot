require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const mongoose = require('mongoose');
const config = require('../config/config.js');
const { loadCommands } = require('./handlers/commandHandler.js');
const { loadEvents } = require('./handlers/eventHandler.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
  ],
});

// MongoDB Connection with retry logic
async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/discord-bot', {
      retryWrites: true,
      w: 'majority',
    });
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    setTimeout(connectMongoDB, 5000); // Retry after 5 seconds
  }
}

// Global error handling
process.on('unhandledRejection', error => {
  console.error('❌ Unhandled Rejection:', error);
});

process.on('uncaughtException', error => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

async function start() {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Load commands and events
    await loadCommands(client);
    await loadEvents(client);

    // Login to Discord
    await client.login(process.env.BOT_TOKEN);
  } catch (error) {
    console.error('❌ Failed to start bot:', error);
    process.exit(1);
  }
}

start();

module.exports = client;