const config = require('../../config/config.js');
const { createModLog, sendLog } = require('../utils/logger.js');
const TempVoice = require('../models/TempVoice.js');

module.exports = {
  name: 'voiceStateUpdate',
  async execute(oldState, newState) {
    const guild = newState.guild;
    const member = newState.member;

    // Temp voice channel creation
    if (newState.channel && !oldState.channel && config.joinToCreateChannelId && !config.joinToCreateChannelId.includes('YOUR_')) {
      if (newState.channelId === config.joinToCreateChannelId) {
        try {
          const newVoiceChannel = await guild.channels.create({
            name: `${member.user.username}'s Voice`,
            type: 2, // Voice channel
            parent: config.tempVoiceCategoryId,
            permissionOverwrites: [
              {
                id: member.id,
                allow: ['Connect', 'Speak', 'ManageChannels'],
              },
              {
                id: guild.id,
                deny: ['Connect'],
              },
            ],
          });

          await member.voice.setChannel(newVoiceChannel);
          await TempVoice.create({
            guildId: guild.id,
            channelId: newVoiceChannel.id,
            ownerId: member.id,
          });
        } catch (error) {
          console.error('Error creating temp voice channel:', error);
        }
      }
    }

    // Auto-delete temp voice channel when empty
    if (oldState.channel) {
      const tempVoice = await TempVoice.findOne({ guildId: guild.id, channelId: oldState.channelId });
      if (tempVoice) {
        const channel = guild.channels.cache.get(oldState.channelId);
        if (channel && channel.members.size === 0) {
          await TempVoice.deleteOne({ channelId: oldState.channelId });
          await channel.delete().catch(() => {});
        }
      }
    }

    // Log voice state changes
    const embed = createModLog({
      title: '🎤 Voice State Updated',
      color: '#0099ff',
      fields: [
        { name: 'Member', value: `${member.user} (${member.id})`, inline: false },
        { name: 'Old Channel', value: oldState.channel ? `${oldState.channel.name} (${oldState.channelId})` : 'None', inline: false },
        { name: 'New Channel', value: newState.channel ? `${newState.channel.name} (${newState.channelId})` : 'None', inline: false },
      ],
    });

    if (oldState.channel !== newState.channel) {
      await sendLog(guild.client, guild.id, embed);
    }
  },
};