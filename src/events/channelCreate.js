const { createModLog, sendLog } = require('../utils/logger.js');

module.exports = {
  name: 'channelCreate',
  async execute(channel) {
    if (!channel.guild) return;

    const embed = createModLog({
      title: '📁 Channel Created',
      color: '#00ff00',
      fields: [
        { name: 'Channel', value: `${channel} (${channel.id})`, inline: false },
        { name: 'Type', value: channel.type, inline: false },
      ],
    });

    await sendLog(channel.client, channel.guildId, embed);
  },
};