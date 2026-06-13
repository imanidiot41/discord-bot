const { createModLog, sendLog } = require('../utils/logger.js');

module.exports = {
  name: 'guildBanAdd',
  async execute(ban) {
    const embed = createModLog({
      title: '🔨 Member Banned',
      color: '#ff0000',
      fields: [
        { name: 'User', value: `${ban.user} (${ban.user.id})`, inline: false },
        { name: 'Reason', value: ban.reason || 'No reason provided', inline: false },
      ],
    });

    await sendLog(ban.client, ban.guild.id, embed);
  },
};