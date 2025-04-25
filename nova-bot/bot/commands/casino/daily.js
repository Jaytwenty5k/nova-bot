const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('daily')
        .setDescription('Erhalte deine tägliche Belohnung!'),
    async execute(interaction) {
        // Logik für die tägliche Belohnung hier
        await interaction.reply({
            content: 'Du hast deine tägliche Belohnung erhalten!',
            ephemeral: true,
        });
    },
};
