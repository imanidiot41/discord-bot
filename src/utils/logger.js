const { EmbedBuilder, ChannelType } = require('discord.js');
const config = require('../../config/config.js');

/**
 * Send a log message to the moderation logs channel
 * @param {Client} client - Discord client
 * @param {string} guildId - Guild ID
 * @param {EmbedBuilder} embed - Embed to send
 */
async function sendLog(client, guildId, embed) {
  try {
    const logChannelId = config.modLogsChannelId;
    if (!logChannelId || logChannelId.includes('YOUR_')) return;

    const guild = client.guilds.cache.get(guildId);
    if (!guild) return;

    const logChannel = guild.channels.cache.get(logChannelId);
    if (!logChannel || logChannel.type !== ChannelType.GuildText) return;

    await logChannel.send({ embeds: [embed] });
  } catch (error) {
    console.error('Error sending log:', error);
  }
}

/**
 * Create a moderation log embed
 * @param {Object} options - Log options
 * @returns {EmbedBuilder}
 */
function createModLog(options = {}) {
  const embed = new EmbedBuilder()
    .setColor(options.color || '#ff0000')
    .setTitle(options.title || 'Moderation Action')
    .setDescription(options.description || '')
    .setTimestamp();

  if (options.fields) {
    embed.addFields(options.fields);
  }

  if (options.moderator) {
    embed.setFooter({ text: `Moderator: ${options.moderator.tag}`, iconURL: options.moderator.displayAvatarURL() });
  }

  return embed;
}

module.exports = {
  sendLog,
  createModLog,
};