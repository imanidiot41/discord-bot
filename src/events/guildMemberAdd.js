const config = require('../../config/config.js');
const { createModLog, sendLog } = require('../utils/logger.js');

module.exports = {
  name: 'guildMemberAdd',
  async execute(member) {
    // Welcome message
    if (config.welcome.enabled && config.welcomeChannelId && !config.welcomeChannelId.includes('YOUR_')) {
      const welcomeChannel = member.guild.channels.cache.get(config.welcomeChannelId);
      if (welcomeChannel) {
        const welcomeMessage = config.welcome.message.replace('{user}', member.user.tag);
        await welcomeChannel.send(`👋 ${welcomeMessage}`).catch(() => {});
      }
    }

    // Auto-role
    if (config.welcome.autoRole && config.autoRoleId && !config.autoRoleId.includes('YOUR_')) {
      const autoRole = member.guild.roles.cache.get(config.autoRoleId);
      if (autoRole) {
        await member.roles.add(autoRole).catch(() => {});
      }
    }

    // Anti-raid tracking
    if (config.antiRaid.enabled) {
      const now = Date.now();
      if (!member.client.joinTimes) member.client.joinTimes = {};
      if (!member.client.joinTimes[member.guildId]) member.client.joinTimes[member.guildId] = [];

      member.client.joinTimes[member.guildId] = member.client.joinTimes[member.guildId].filter(t => now - t < config.antiRaid.timeWindow);
      member.client.joinTimes[member.guildId].push(now);

      if (member.client.joinTimes[member.guildId].length > config.antiRaid.joinThreshold) {
        // Lock all channels
        const lockEmbed = createModLog({
          title: '🚨 Anti-Raid Triggered',
          color: '#ff0000',
          description: `Lockdown activated due to ${config.antiRaid.joinThreshold}+ joins in ${config.antiRaid.timeWindow / 1000}s`,
        });
        await sendLog(member.client, member.guildId, lockEmbed);
      }
    }

    // Verification check
    if (config.verification.enabled && config.verifiedRoleId && !config.verifiedRoleId.includes('YOUR_')) {
      const verifiedRole = member.guild.roles.cache.get(config.verifiedRoleId);
      if (verifiedRole && !member.roles.has(verifiedRole.id)) {
        await member.send('👋 Welcome! Please verify to access the server.').catch(() => {});
      }
    }
  },
};