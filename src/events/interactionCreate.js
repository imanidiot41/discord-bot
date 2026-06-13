const { InteractionType } = require('discord.js');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (interaction.type === InteractionType.ApplicationCommand) {
      const command = interaction.client.commands.get(interaction.commandName);
      if (!command) return;

      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp({ content: '❌ There was an error executing this command!', ephemeral: true });
        } else {
          await interaction.reply({ content: '❌ There was an error executing this command!', ephemeral: true });
        }
      }
    } else if (interaction.type === InteractionType.MessageComponent) {
      // Handle buttons, select menus, etc.
      const customId = interaction.customId;
      // Button handlers will be implemented in commands
    }
  },
};