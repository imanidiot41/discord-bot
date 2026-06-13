const { PermissionFlagsBits } = require('discord.js');

/**
 * Check if a member has a specific permission
 * @param {GuildMember} member - Discord member
 * @param {string} permission - Permission flag
 * @returns {boolean}
 */
function hasPermission(member, permission) {
  if (!member) return false;
  return member.permissions.has(permission);
}

/**
 * Check if user is bot owner
 * @param {string} userId - User ID
 * @param {string} ownerId - Owner ID from config
 * @returns {boolean}
 */
function isBotOwner(userId, ownerId) {
  return userId === ownerId;
}

/**
 * Check if member has admin/moderator role
 * @param {GuildMember} member - Discord member
 * @returns {boolean}
 */
function isModerator(member) {
  return hasPermission(member, PermissionFlagsBits.ModerateMembers) ||
         hasPermission(member, PermissionFlagsBits.Administrator);
}

/**
 * Check required permissions for command
 * @param {GuildMember} member - Discord member
 * @param {Array<string>} requiredPermissions - Array of permission flags
 * @returns {boolean}
 */
function hasRequiredPermissions(member, requiredPermissions = []) {
  if (!member) return false;
  return requiredPermissions.every(perm => hasPermission(member, perm));
}

module.exports = {
  hasPermission,
  isBotOwner,
  isModerator,
  hasRequiredPermissions,
};