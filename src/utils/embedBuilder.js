const { EmbedBuilder } = require('discord.js');
const config = require('../../config/config.js');

/**
 * Create a standardized embed
 * @param {Object} options - Embed options
 * @returns {EmbedBuilder}
 */
function createEmbed(options = {}) {
  const embed = new EmbedBuilder()
    .setColor(options.color || config.embedColor)
    .setTimestamp();

  if (options.title) embed.setTitle(options.title);
  if (options.description) embed.setDescription(options.description);
  if (options.author) embed.setAuthor(options.author);
  if (options.thumbnail) embed.setThumbnail(options.thumbnail);
  if (options.image) embed.setImage(options.image);
  if (options.footer) embed.setFooter(options.footer);
  if (options.fields) embed.addFields(options.fields);
  if (options.url) embed.setURL(options.url);

  return embed;
}

/**
 * Create a success embed
 * @param {string} title
 * @param {string} description
 * @returns {EmbedBuilder}
 */
function successEmbed(title, description) {
  return createEmbed({
    title: `✅ ${title}`,
    description,
    color: '#00ff00',
  });
}

/**
 * Create an error embed
 * @param {string} title
 * @param {string} description
 * @returns {EmbedBuilder}
 */
function errorEmbed(title, description) {
  return createEmbed({
    title: `❌ ${title}`,
    description,
    color: '#ff0000',
  });
}

/**
 * Create an info embed
 * @param {string} title
 * @param {string} description
 * @returns {EmbedBuilder}
 */
function infoEmbed(title, description) {
  return createEmbed({
    title: `ℹ️ ${title}`,
    description,
    color: '#0099ff',
  });
}

module.exports = {
  createEmbed,
  successEmbed,
  errorEmbed,
  infoEmbed,
};