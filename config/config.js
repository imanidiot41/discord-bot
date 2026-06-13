// 👉 CENTRALIZED CONFIGURATION - Update these with your own values
module.exports = {
  // Bot
  prefix: '!',
  embedColor: '#0099ff',

  // IDs - 👉 PUT YOUR DISCORD IDs HERE
  botOwnerId: 'YOUR_BOT_OWNER_ID',
  guildId: process.env.GUILD_ID || 'YOUR_GUILD_ID',
  clientId: process.env.CLIENT_ID || 'YOUR_CLIENT_ID',

  // Channel IDs - 👉 PUT YOUR CHANNEL IDs HERE
  modLogsChannelId: process.env.MODLOGS_CHANNEL_ID || 'YOUR_MODLOGS_CHANNEL_ID',
  welcomeChannelId: process.env.WELCOME_CHANNEL_ID || 'YOUR_WELCOME_CHANNEL_ID',
  goodbyeChannelId: process.env.GOODBYE_CHANNEL_ID || 'YOUR_GOODBYE_CHANNEL_ID',
  ticketsCategoryId: process.env.TICKETS_CATEGORY_ID || 'YOUR_TICKETS_CATEGORY_ID',
  transcriptsChannelId: process.env.TRANSCRIPTS_CHANNEL_ID || 'YOUR_TRANSCRIPTS_CHANNEL_ID',
  suggestionsChannelId: process.env.SUGGESTIONS_CHANNEL_ID || 'YOUR_SUGGESTIONS_CHANNEL_ID',
  reportsChannelId: process.env.REPORTS_CHANNEL_ID || 'YOUR_REPORTS_CHANNEL_ID',
  giveawaysChannelId: process.env.GIVEAWAYS_CHANNEL_ID || 'YOUR_GIVEAWAYS_CHANNEL_ID',
  tempVoiceCategoryId: process.env.TEMP_VOICE_CATEGORY_ID || 'YOUR_TEMP_VOICE_CATEGORY_ID',
  joinToCreateChannelId: process.env.JOIN_TO_CREATE_CHANNEL_ID || 'YOUR_JOIN_TO_CREATE_CHANNEL_ID',

  // Role IDs - 👉 PUT YOUR ROLE IDs HERE
  ticketsSupportRoleId: process.env.TICKETS_SUPPORT_ROLE_ID || 'YOUR_TICKETS_SUPPORT_ROLE_ID',
  verifiedRoleId: process.env.VERIFIED_ROLE_ID || 'YOUR_VERIFIED_ROLE_ID',
  autoRoleId: process.env.AUTO_ROLE_ID || 'YOUR_AUTO_ROLE_ID',
  mutedRoleId: process.env.MUTED_ROLE_ID || 'YOUR_MUTED_ROLE_ID',

  // Moderation Settings
  moderation: {
    maxWarnings: 5,
    muteRoleName: 'Muted',
    defaultMuteDuration: 3600000, // 1 hour in ms
  },

  // Automod Settings
  automod: {
    bannedWords: ['badword1', 'badword2', 'badword3'],
    mentionSpamThreshold: 5,
    mentionSpamTimeWindow: 5000, // 5 seconds
    deleteInvites: true,
    deleteLinks: false,
  },

  // Anti-Raid Settings
  antiRaid: {
    enabled: false,
    joinThreshold: 10, // joins within timeWindow
    timeWindow: 60000, // 1 minute
  },

  // Welcome/Goodbye Settings
  welcome: {
    enabled: true,
    message: 'Welcome to the server, {user}!',
    autoRole: true,
    requireVerification: true,
  },

  goodbye: {
    enabled: true,
    message: '{user} has left the server.',
  },

  // Economy Settings
  economy: {
    dailyReward: 500,
    workReward: { min: 100, max: 500 },
    robChance: 0.5,
    robAmount: { min: 100, max: 1000 },
    startingBalance: 1000,
  },

  // Leveling Settings
  leveling: {
    xpPerMessage: { min: 5, max: 25 },
    xpCooldown: 60000, // 1 minute
    levelUpMessage: 'Congratulations {user}! You reached level {level}!',
  },

  // Music Settings
  music: {
    maxQueueSize: 100,
    defaultVolume: 80,
  },

  // API Keys - 👉 PUT YOUR API KEYS HERE
  openWeatherApiKey: process.env.OPENWEATHER_API_KEY || 'YOUR_OPENWEATHER_API_KEY',

  // Ticket Settings
  tickets: {
    categoryId: process.env.TICKETS_CATEGORY_ID || 'YOUR_TICKETS_CATEGORY_ID',
    supportRoleId: process.env.TICKETS_SUPPORT_ROLE_ID || 'YOUR_TICKETS_SUPPORT_ROLE_ID',
    transcriptChannelId: process.env.TRANSCRIPTS_CHANNEL_ID || 'YOUR_TRANSCRIPTS_CHANNEL_ID',
  },

  // Giveaway Settings
  giveaway: {
    channelId: process.env.GIVEAWAYS_CHANNEL_ID || 'YOUR_GIVEAWAYS_CHANNEL_ID',
  },

  // Starboard Settings
  starboard: {
    reactionThreshold: 3,
    emoji: '⭐',
  },

  // Verification Settings
  verification: {
    enabled: true,
    roleId: process.env.VERIFIED_ROLE_ID || 'YOUR_VERIFIED_ROLE_ID',
  },

  // Counting Settings
  counting: {
    allowMultipleCounts: false,
  },

  // Messages
  messages: {
    noPermission: '❌ You do not have permission to use this command.',
    userNotFound: '❌ User not found.',
    errorOccurred: '❌ An error occurred while processing your command.',
    success: '✅ Command executed successfully.',
  },
};
