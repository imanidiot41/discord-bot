const Afk = require('../models/Afk.js');
const config = require('../../config/config.js');
const { ChannelType } = require('discord.js');

module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot || !message.guild) return;

    // Check AFK
    const afkUser = await Afk.findOne({ guildId: message.guildId, userId: message.author.id });
    if (afkUser) {
      await Afk.deleteOne({ guildId: message.guildId, userId: message.author.id });
    }

    // Check if mentioned user is AFK
    if (message.mentions.has(message.guild.members.me)) {
      const mentionedAfk = await Afk.findOne({ guildId: message.guildId, userId: message.mentions.first()?.id });
      if (mentionedAfk) {
        return message.reply(`The user is currently AFK: ${mentionedAfk.reason}`);
      }
    }

    // Automod - Banned words
    const bannedWords = config.automod.bannedWords;
    const messageContent = message.content.toLowerCase();
    for (const word of bannedWords) {
      if (messageContent.includes(word.toLowerCase())) {
        await message.delete().catch(() => {});
        return message.author.send(`Your message was deleted for containing banned content.`);
      }
    }

    // Anti-spam: mention spam
    const mentions = message.mentions.members.size;
    if (mentions > config.automod.mentionSpamThreshold) {
      await message.delete().catch(() => {});
      const member = message.member;
      if (member && config.mutedRoleId && !config.mutedRoleId.includes('YOUR_')) {
        const muteRole = message.guild.roles.cache.get(config.mutedRoleId);
        if (muteRole) {
          await member.roles.add(muteRole).catch(() => {});
          return message.channel.send(`⚠️ ${message.author} has been muted for mention spam.`);
        }
      }
    }

    // Invite blocker
    if (config.automod.deleteInvites) {
      const inviteRegex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite|discord\.com\/invite)\/.+/gi;
      if (inviteRegex.test(message.content)) {
        await message.delete().catch(() => {});
        return message.author.send('Invites are not allowed in this server.');
      }
    }

    // Link filter
    if (config.automod.deleteLinks) {
      const linkRegex = /(https?:\/\/[^\s]+)/g;
      if (linkRegex.test(message.content)) {
        await message.delete().catch(() => {});
        return message.author.send('Links are not allowed in this server.');
      }
    }
  },
};