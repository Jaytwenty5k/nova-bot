const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tournament')
        .setDescription('Nimm an einem Casino-Turnier teil!'),
    async execute(interaction) {
        // Logik für das Casino-Turnier hier
        await interaction.reply({
            content: 'Du hast am Casino-Turnier teilgenommen!',
            ephemeral: true,
        });
    },
};
