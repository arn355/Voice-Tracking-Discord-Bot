const { VoiceClient } = require('djs-voice');
const dotenv = require('dotenv');
const client = require('../index');
dotenv.config();

const voiceClient = new VoiceClient({
    allowBots: false,
    client: client,
    debug: true,
    mongooseConnectionString: process.env.MONGO_URL
}); 

module.exports = voiceClient;