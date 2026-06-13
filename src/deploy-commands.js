require('dotenv').config();
const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');

const config = require('../config/config.js');
const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const commands = [];

// Recursively load all command files
function loadCommandsRecursive(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      loadCommandsRecursive(filePath);
    } else if (file.endsWith('.js')) {
      try {
        const command = require(filePath);
        if (command.data) {
          commands.push(command.data.toJSON());
          console.log(`📄 Loaded: ${command.data.name}`);
        }
      } catch (error) {
        console.error(`Error loading ${file}:`, error);
      }
    }
  });
}

async function deployCommands() {
  try {
    console.log('🚀 Starting command deployment...\n');

    const commandsPath = path.join(__dirname, 'commands');
    loadCommandsRecursive(commandsPath);

    const rest = new REST({ version: '10' }).setToken(TOKEN);

    if (GUILD_ID && !GUILD_ID.includes('YOUR_')) {
      // Deploy to specific guild (faster for testing)
      console.log(`📤 Deploying to guild: ${GUILD_ID}\n`);
      await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
    } else {
      // Deploy globally
      console.log('📡 Deploying globally...\n');
      await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
    }

    console.log(`✅ Successfully deployed ${commands.length} commands!\n`);
  } catch (error) {
    console.error('❌ Error deploying commands:', error);
    process.exit(1);
  }
}

deployCommands();