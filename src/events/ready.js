module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log(`\n✅ Bot is online as ${client.user.tag}`);
    console.log(`📊 Serving ${client.guilds.cache.size} guilds`);

    // Set bot status
    client.user.setActivity('/help', { type: 'LISTENING' });
  },
};