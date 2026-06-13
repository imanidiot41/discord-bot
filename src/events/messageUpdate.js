const { createModLog, sendLog } = require('../utils/logger.js');

module.exports = {
  name: 'messageUpdate',
  async execute(oldMessage, newMessage) {
    if (oldMessage.author?.bot || !oldMessage.guild) return;
    if (oldMessage.content === newMessage.content) return;

    const embed = createModLog({
      title: '📝 Message Edited',
      color: '#ffff00',
      fields: [
        { name: 'Author', value: `${oldMessage.author} (${oldMessage.author.id})`, inline: false },
        { name: 'Channel', value: `${oldMessage.channel} (${oldMessage.channelId})`, inline: false },
        { name: 'Before', value: oldMessage.content.slice(0, 1024) || 'No content', inline: false },
        { name: 'After', value: newMessage.content.slice(0, 1024) || 'No content', inline: false },
      ],
    });

    await sendLog(oldMessage.client, oldMessage.guildId, embed);
  },
};