module.exports = {
  data: {
    name: 'game',
    description: 'Hole Informationen zu einem Roblox-Spiel!',
    options: [
      {
        type: 'STRING',
        name: 'game_name',
        description: 'Name des Spiels',
        required: true,
      },
    ],
  },
  async execute(interaction) {
    const gameName = interaction.options.getString('game_name');
    
    try {
      const response = await fetch(`https://api.roblox.com/game/v1/games?title=${gameName}`);
      const gameData = await response.json();

      if (gameData.data.length === 0) {
        return interaction.reply({ content: 'Kein Spiel gefunden mit diesem Namen.', ephemeral: true });
      }

      const game = gameData.data[0];

      // Erstelle das Embed mit den Spielinformationen
      const embed = {
        color: 0x0099ff,
        title: game.name,
        description: game.description,
        fields: [
          { name: 'Spieler', value: `${game.playing} Spieler`, inline: true },
          { name: 'Bewertung', value: `${game.rating} Sterne`, inline: true },
        ],
        thumbnail: {
          url: game.thumbnailUrl,
        },
        footer: {
          text: `Spiel-ID: ${game.id}`,
        },
      };

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Fehler beim Abrufen von Spielinformationen:', error);
      await interaction.reply({ content: 'Es gab einen Fehler beim Abrufen der Spielinformationen. Bitte versuche es später erneut.', ephemeral: true });
    }
  },
};
