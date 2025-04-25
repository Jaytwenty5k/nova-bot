const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('buycasino')
        .setDescription('Kaufe dein eigenes Casino für den Einsatz von Spielwährung'),
    async execute(interaction) {
        // Logik für den Kauf eines Casinos hier
        await interaction.reply({
            content: 'Du hast ein Casino gekauft! Viel Spaß!',
            ephemeral: true,
        });
    },
};
