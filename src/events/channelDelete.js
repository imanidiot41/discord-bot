const { createModLog, sendLog } = require('../utils/logger.js');

module.exports = {
  name: 'channelDelete',
  async execute(channel) {
    if (!channel.guild) return;

    const embed = createModLog({
      title: '📁 Channel Deleted',
      color: '#ff0000',
      fields: [
        { name: 'Channel Name', value: channel.name, inline: false },
        { name: 'Channel ID', value: channel.id, inline: false },
        { name: 'Type', value: channel.type, inline: false },
      ],
    });

    await sendLog(channel.client, channel.guildId, embed);
  },
};