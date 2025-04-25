const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('casino')
        .setDescription('Betrete das Casino und entdecke alle Spiele!'),
    async execute(interaction) {
        // Allgemeine Casino-Übersicht oder Einstieg
        await interaction.reply({
            content: 'Willkommen im Casino! Wähle ein Spiel, um zu spielen.',
            ephemeral: true,
        });
    },
};
