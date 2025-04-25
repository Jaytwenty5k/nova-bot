const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token, clientId, guildId } = require('./config.json');
const fs = require('fs');

// Erstellen des Clients mit den richtigen Intents
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent, 
        GatewayIntentBits.GuildMembers
    ] 
});

// Sammlung für alle Befehle
client.commands = new Collection();

// Befehl-Handler - Alle Befehle werden hier aus einem Ordner geladen
const commandFolders = fs.readdirSync('./commands');
let loadedCommands = 0;
let failedCommands = 0;

// Befehl-Registrierung und Fehlerbehandlung
commandFolders.forEach(folder => {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    commandFiles.forEach(file => {
        const command = require(`./commands/${folder}/${file}`);
        if (command.data) {
            client.commands.set(command.data.name, command);
            loadedCommands++;
        } else {
            console.log(`❌ Befehl ${file} konnte nicht geladen werden.`);
            failedCommands++;
        }
    });
});

// Ausgabe der geladenen Befehle
console.log(`✅ ${loadedCommands} Befehle erfolgreich geladen.`);
console.log(`❌ ${failedCommands} Befehle konnten nicht geladen werden.`);

// Ereignis: Bot ist bereit
client.once('ready', () => {
    console.log(`${client.user.tag} ist online!`);

    // Slash-Befehle registrieren
    const commands = Array.from(client.commands.values()).map(command => command.data.toJSON());
    client.guilds.cache.get(guildId)?.commands.set(commands)
        .then(() => {
            console.log(`✅ Slash-Commands wurden registriert.`);
        })
        .catch(err => {
            console.error(`❌ Fehler bei der Registrierung der Slash-Commands: ${err}`);
        });
});

// Interaktionen empfangen und verarbeiten
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`❌ Befehl ${interaction.commandName} nicht gefunden.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(`❌ Fehler bei der Ausführung des Befehls: ${error}`);
        await interaction.reply({ content: 'Es gab einen Fehler bei der Ausführung dieses Befehls.', ephemeral: true });
    }
});

// Fehler beim Bot-Start
client.on('error', error => {
    console.error('❌ Ein Fehler ist aufgetreten:', error);
});

// Bot einloggen
client.login(token);
