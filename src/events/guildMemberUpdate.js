const { createModLog, sendLog } = require('../utils/logger.js');

module.exports = {
  name: 'guildMemberUpdate',
  async execute(oldMember, newMember) {
    // Check for role changes
    const oldRoles = oldMember.roles.cache.map(r => r.id);
    const newRoles = newMember.roles.cache.map(r => r.id);

    const addedRoles = newRoles.filter(r => !oldRoles.includes(r));
    const removedRoles = oldRoles.filter(r => !newRoles.includes(r));

    if (addedRoles.length > 0 || removedRoles.length > 0) {
      const embed = createModLog({
        title: '🎭 Member Roles Updated',
        color: '#0099ff',
        fields: [
          { name: 'Member', value: `${newMember.user} (${newMember.id})`, inline: false },
          { name: 'Roles Added', value: addedRoles.map(r => `<@&${r}>`).join(', ') || 'None', inline: false },
          { name: 'Roles Removed', value: removedRoles.map(r => `<@&${r}>`).join(', ') || 'None', inline: false },
        ],
      });
      await sendLog(newMember.client, newMember.guildId, embed);
    }

    // Check for nickname changes
    if (oldMember.nickname !== newMember.nickname) {
      const embed = createModLog({
        title: '📝 Member Nickname Updated',
        color: '#0099ff',
        fields: [
          { name: 'Member', value: `${newMember.user} (${newMember.id})`, inline: false },
          { name: 'Old Nickname', value: oldMember.nickname || 'None', inline: false },
          { name: 'New Nickname', value: newMember.nickname || 'None', inline: false },
        ],
      });
      await sendLog(newMember.client, newMember.guildId, embed);
    }
  },
};