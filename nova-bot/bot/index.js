const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.commands = new Collection();

const commandFolders = fs.readdirSync('./commands');

commandFolders.forEach(folder => {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

  commandFiles.forEach(file => {
    const command = require(`./commands/${folder}/${file}`);
    if (command.data) {
      client.commands.set(command.data.name, command);
    }
  });
});

client.once('ready', () => {
  console.log(`${client.user.tag} ist online!`);
});

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

client.login(token);
