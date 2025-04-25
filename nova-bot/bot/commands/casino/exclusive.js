const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('exclusive')
        .setDescription('Entdecke exklusive Casino-Angebote und Boni!'),
    async execute(interaction) {
        // Logik für exklusive Angebote hier
        await interaction.reply({
            content: 'Exklusive Angebote und Boni sind verfügbar!',
            ephemeral: true,
        });
    },
};
