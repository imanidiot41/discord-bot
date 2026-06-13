const { createModLog, sendLog } = require('../utils/logger.js');

module.exports = {
  name: 'roleDelete',
  async execute(role) {
    const embed = createModLog({
      title: '🎭 Role Deleted',
      color: '#ff0000',
      fields: [
        { name: 'Role Name', value: role.name, inline: false },
        { name: 'Role ID', value: role.id, inline: false },
      ],
    });

    await sendLog(role.client, role.guild.id, embed);
  },
};