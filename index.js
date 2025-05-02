const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { loadEvents } = require('./Handlers/eventHandler');
const { loadCommands } = require('./Handlers/commandHandler');
const { token } = require('./config.json');
const connectToDatabase = require('./config/database');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
    ],
    partials: [
        Partials.User,
        Partials.Message,
        Partials.GuildMember,
        Partials.Reaction,
    ],
});

client.commands = new Collection();
client.events = new Collection();

// Stelle die Verbindung zur Datenbank her
connectToDatabase();

loadEvents(client);
loadCommands(client);

client.login(token);