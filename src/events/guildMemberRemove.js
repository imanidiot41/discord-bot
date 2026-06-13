const config = require('../../config/config.js');
const { createModLog, sendLog } = require('../utils/logger.js');

module.exports = {
  name: 'guildMemberRemove',
  async execute(member) {
    // Goodbye message
    if (config.goodbye.enabled && config.goodbyeChannelId && !config.goodbyeChannelId.includes('YOUR_')) {
      const goodbyeChannel = member.guild.channels.cache.get(config.goodbyeChannelId);
      if (goodbyeChannel) {
        const goodbyeMessage = config.goodbye.message.replace('{user}', member.user.tag);
        await goodbyeChannel.send(`👋 ${goodbyeMessage}`).catch(() => {});
      }
    }

    // Log leave
    const embed = createModLog({
      title: '🚪 Member Left',
      color: '#ff0000',
      fields: [
        { name: 'Member', value: `${member.user} (${member.id})`, inline: false },
        { name: 'Joined At', value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:F>`, inline: false },
      ],
    });

    await sendLog(member.client, member.guildId, embed);
  },
};