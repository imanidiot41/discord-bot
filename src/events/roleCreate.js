const { createModLog, sendLog } = require('../utils/logger.js');

module.exports = {
  name: 'roleCreate',
  async execute(role) {
    const embed = createModLog({
      title: '🎭 Role Created',
      color: '#00ff00',
      fields: [
        { name: 'Role', value: `${role} (${role.id})`, inline: false },
        { name: 'Color', value: role.color.toString(16) || 'None', inline: false },
        { name: 'Hoisted', value: role.hoist ? 'Yes' : 'No', inline: false },
      ],
    });

    await sendLog(role.client, role.guild.id, embed);
  },
};