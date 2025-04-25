client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
  
    const command = client.commands.get(interaction.commandName);
    if (!command) {
      console.error('Befehl nicht gefunden:', interaction.commandName);
      return;
    }
  
    try {
      await interaction.reply('Pong!');
    } catch (error) {
      console.error('Fehler beim Ausführen des Befehls:', error);
    }
  });
    