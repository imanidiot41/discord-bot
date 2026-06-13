const fs = require('fs');
const path = require('path');

/**
 * Load all commands from commands directory
 * @param {Client} client - Discord client
 */
async function loadCommands(client) {
  client.commands = new Map();
  const commandsPath = path.join(__dirname, '../commands');

  const walkDir = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.js')) {
        try {
          const command = require(filePath);
          if (command.data && command.execute) {
            client.commands.set(command.data.name, command);
            console.log(`✅ Loaded command: ${command.data.name}`);
          }
        } catch (error) {
          console.error(`Error loading command ${file}:`, error);
        }
      }
    });
  };

  walkDir(commandsPath);
  console.log(`\n📦 Total commands loaded: ${client.commands.size}\n`);
}

module.exports = { loadCommands };