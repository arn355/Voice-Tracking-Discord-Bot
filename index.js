const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
const voiceClient = require('./client/VoiceClient');
dotenv.config();

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
});

client.on('ready', () => {
    console.log(`${client.user.tag} is ready!`);
});

client.on('voiceStateUpdate', (oldState, newState) => {
    // if (oldState.guild !== '848315673389563917') return
    voiceClient.startListener(oldState, newState);
});

client.login(process.env.BOT_TOKEN);