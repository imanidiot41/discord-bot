# Advanced Discord Bot

A production-ready Discord bot built with discord.js v14, featuring moderation, music, economy, leveling, tickets, and much more!

## Features

✨ **Moderation**: Kick, ban, mute, warn, notes, lockdown, nuke
🎵 **Music**: Play, skip, queue, filters (bassboost, nightcore), playlists, lyrics
💰 **Economy**: Currency system, daily rewards, gambling games (blackjack, slots, roulette)
📊 **Leveling**: XP system, rank cards, leaderboards
🎫 **Tickets**: Support ticket system with transcripts
⚙️ **Reaction Roles**: Automatic role assignment via buttons/reactions
🎁 **Giveaways**: Create and manage giveaways
🤖 **Automod**: Banned words, link filter, invite blocker, anti-spam
📝 **Suggestions**: Community suggestions with voting
🏷️ **Tags**: Custom server commands
📌 **Sticky Messages**: Auto-reposting messages
🔐 **Verification**: Member verification system
⏸️ **AFK Status**: Set AFK status with automatic replies
🔊 **Voice Features**: Temporary voice channels, voice kick/mute
⭐ **Starboard**: Highlight messages with reactions
📊 **Counting Game**: Sequence counting mini-game
🛡️ **Anti-Raid**: Join rate limiting and automatic lockdown
📝 **Embed Builder**: Interactive embed creation
❓ **Help**: Comprehensive help menu with categories

## Setup & Environment Variables

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas or local MongoDB
- Discord Bot Token
- Discord Server (Guild) ID
- Discord Channel IDs for various features

### Installation

1. **Clone and Install**
```bash
git clone <your-repo-url>
cd discord-bot
npm install
```

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   - Fill in all required variables (see table below)
   - Make sure `config/config.js` matches your `.env` values

3. **Deploy Commands**
```bash
node src/deploy-commands.js
```

4. **Start the Bot**
```bash
npm start
```

### Environment Variables Table

| Variable | Type | Description | Required | Example |
|----------|------|-------------|----------|---------|
| `BOT_TOKEN` | String | Discord bot token from Developer Portal | ✅ | `MTA4MjM5ODA2MjUwMzk1...` |
| `MONGO_URI` | String | MongoDB connection string | ✅ | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `CLIENT_ID` | String | Bot's application ID | ✅ | `1082398062503952384` |
| `GUILD_ID` | String | Guild ID for dev slash commands (leave empty for global) | ❌ | `1082398062503952384` |
| `OPENWEATHER_API_KEY` | String | OpenWeatherMap API key for weather command | ❌ | `abc123def456` |
| `MODLOGS_CHANNEL_ID` | String | Channel ID for moderation logs | ✅ | `1082398062503952384` |
| `WELCOME_CHANNEL_ID` | String | Channel ID for welcome messages | ✅ | `1082398062503952384` |
| `GOODBYE_CHANNEL_ID` | String | Channel ID for goodbye messages | ❌ | `1082398062503952384` |
| `TICKETS_CATEGORY_ID` | String | Category ID for ticket channels | ✅ | `1082398062503952384` |
| `TICKETS_SUPPORT_ROLE_ID` | String | Role ID for ticket support team | ✅ | `1082398062503952384` |
| `TRANSCRIPTS_CHANNEL_ID` | String | Channel ID for ticket transcripts | ✅ | `1082398062503952384` |
| `SUGGESTIONS_CHANNEL_ID` | String | Channel ID for suggestions | ✅ | `1082398062503952384` |
| `REPORTS_CHANNEL_ID` | String | Channel ID for user reports | ✅ | `1082398062503952384` |
| `VERIFIED_ROLE_ID` | String | Role ID for verified members | ✅ | `1082398062503952384` |
| `AUTO_ROLE_ID` | String | Role ID assigned on join | ❌ | `1082398062503952384` |
| `MUTED_ROLE_ID` | String | Role ID for muted members | ✅ | `1082398062503952384` |
| `TEMP_VOICE_CATEGORY_ID` | String | Category ID for temporary voice channels | ✅ | `1082398062503952384` |
| `JOIN_TO_CREATE_CHANNEL_ID` | String | Voice channel ID that creates temp channels | ✅ | `1082398062503952384` |
| `GIVEAWAYS_CHANNEL_ID` | String | Channel ID for giveaways | ✅ | `1082398062503952384` |
| `NODE_ENV` | String | Environment mode | ❌ | `production` |

### How to Find IDs

1. **Enable Developer Mode** in Discord User Settings → Advanced → Developer Mode
2. **Right-click any channel/role/user** and select "Copy User/Role/Channel ID"
3. **Paste into `.env`** file

### MongoDB Setup

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string (includes username & password)
4. Replace `username` and `password` in connection string
5. Paste into `MONGO_URI` in `.env`

### Discord Developer Portal Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create New Application
3. Go to "Bot" section, click "Add Bot"
4. Under "TOKEN", click "Copy" and paste into `BOT_TOKEN`
5. Go to "OAuth2" → "General" for `CLIENT_ID`
6. Copy `CLIENT_ID` to `.env`

### Deploying to Render

1. Push code to GitHub
2. Connect repository to [Render](https://render.com)
3. Create New Web Service
4. Select Node as environment
5. Build: `npm install`
6. Start: `bash start.sh`
7. Add environment variables in Settings → Environment
8. Deploy!

## Project Structure

```
discord-bot/
├── config/
│   └── config.js              # Centralized configuration
├── src/
│   ├── index.js               # Bot entry point
│   ├── deploy-commands.js     # Command deployment
│   ├── events/                # Event handlers
│   ├── commands/              # Slash commands organized by category
│   ├── handlers/              # Loader handlers
│   ├── utils/                 # Utility functions
│   └── models/                # MongoDB models
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies
├── render.yaml                # Render deployment config
└── start.sh                   # Startup script
```

## Commands

All commands use slash commands (/) for easy discovery!

### Moderation
- `/kick` - Kick a member
- `/ban` - Ban a member
- `/unban` - Unban a member
- `/mute` - Mute a member
- `/unmute` - Unmute a member
- `/warn` - Warn a member
- `/warnings` - View member warnings
- `/clearwarnings` - Clear member warnings
- `/modnote` - Add moderator note
- `/notes` - View moderator notes
- `/clear` - Clear messages
- `/nuke` - Delete and recreate channel
- `/slowmode` - Set channel slowmode
- `/lock` - Lock a channel
- `/unlock` - Unlock a channel
- `/lockdown` - Lock all channels
- `/unlockall` - Unlock all channels
- `/voicekick` - Kick from voice
- `/voicemute` - Mute in voice
- `/voiceunmute` - Unmute in voice
- `/timeout` - Timeout a member

### Utility
- `/userinfo` - Get user information
- `/serverinfo` - Get server information
- `/avatar` - Get user avatar
- `/banner` - Get user banner
- `/roleinfo` - Get role information
- `/channelinfo` - Get channel information
- `/membercount` - Get member count
- `/ping` - Bot latency
- `/uptime` - Bot uptime
- `/weather` - Get weather
- `/translate` - Translate text
- `/define` - Define a word
- `/report` - Report a user
- `/say` - Echo a message

### Fun
- `/meme` - Random meme
- `/8ball` - Magic 8 ball
- `/coinflip` - Flip a coin
- `/roll` - Roll dice
- `/rps` - Rock paper scissors
- `/wouldyourather` - Would you rather
- `/truthordare` - Truth or dare
- `/dadjoke` - Get dad joke
- `/fact` - Random fact
- `/cat` - Random cat image
- `/dog` - Random dog image
- `/quote` - Random quote
- `/emojify` - Convert to emoji
- `/pp` - Pepe the Frog

### Music
- `/play` - Play a song
- `/skip` - Skip song
- `/stop` - Stop player
- `/queue` - View queue
- `/nowplaying` - Current song
- `/pause` - Pause player
- `/resume` - Resume player
- `/shuffle` - Shuffle queue
- `/loop` - Set loop mode
- `/volume` - Set volume
- `/seek` - Seek to time
- `/remove` - Remove from queue
- `/lyrics` - Get song lyrics
- `/playlist` - Play playlist
- `/bassboost` - Bassboost filter
- `/nightcore` - Nightcore filter

### Leveling
- `/rank` - View your rank
- `/leaderboard` - View leaderboard
- `/setlevel` - Set member level (admin)

### Economy
- `/balance` - Check balance
- `/daily` - Claim daily reward
- `/work` - Work for money
- `/rob` - Rob a member
- `/deposit` - Deposit to bank
- `/withdraw` - Withdraw from bank
- `/shop` - View shop items
- `/blackjack` - Play blackjack
- `/slots` - Play slots
- `/roulette` - Play roulette
- `/fish` - Go fishing
- `/hunt` - Go hunting
- `/crime` - Commit crime
- `/give` - Give money to member
- `/setmoney` - Set member money (admin)
- `/leadereco` - Economy leaderboard

### Tickets
- `/ticket` - Setup ticket system
- `/close` - Close ticket
- `/adduser` - Add user to ticket
- `/removeuser` - Remove user from ticket

### Giveaways
- `/gstart` - Start giveaway
- `/gend` - End giveaway
- `/greroll` - Reroll giveaway
- `/glist` - List giveaways

### Other
- `/afk` - Set AFK status
- `/suggest` - Submit suggestion
- `/tag` - Manage tags
- `/reactionrole` - Setup reaction roles
- `/verify` - Verification system
- `/counting` - Counting game setup
- `/embedbuilder` - Build embed
- `/help` - View help menu

## Troubleshooting

### Bot not responding
- Check `BOT_TOKEN` is correct
- Ensure bot has proper permissions in server
- Check bot is online in Discord

### Commands not appearing
- Run `node src/deploy-commands.js` to redeploy
- Wait up to 1 hour for global commands to sync
- For dev testing, set `GUILD_ID` in `.env`

### MongoDB connection failed
- Verify `MONGO_URI` is correct
- Check IP is whitelisted in MongoDB Atlas
- Ensure username/password are correct

### Music not working
- Check bot is in voice channel
- Verify `@discordjs/voice` and `play-dl` are installed
- Ensure ffmpeg is installed on system

## Support

For issues or questions, create an issue on GitHub or contact the development team.

## License

MIT License - feel free to use and modify!
