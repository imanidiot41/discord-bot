const { AuditLogEvent } = require('discord.js');
const { createModLog, sendLog } = require('../utils/logger.js');

module.exports = {
  name: 'messageDelete',
  async execute(message) {
    if (message.author?.bot || !message.guild) return;

    const embed = createModLog({
      title: '📝 Message Deleted',
      color: '#ff9900',
      fields: [
        { name: 'Author', value: `${message.author} (${message.author.id})`, inline: false },
        { name: 'Channel', value: `${message.channel} (${message.channelId})`, inline: false },
        { name: 'Content', value: message.content.slice(0, 1024) || 'No content', inline: false },
        { name: 'Created At', value: `<t:${Math.floor(message.createdTimestamp / 1000)}:F>`, inline: false },
      ],
    });

    await sendLog(message.client, message.guildId, embed);
  },
};