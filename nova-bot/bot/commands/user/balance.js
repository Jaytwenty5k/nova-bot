const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Zeigt deinen aktuellen Kontostand an'),
    async execute(interaction) {
        // Beispielhafte Kontostandsprüfung (diese Logik hängt von deiner Economy-DB ab)
        const balance = 1000; // Ersetze dies mit deiner eigenen Datenbankabfrage
        await interaction.reply({ content: `Dein Kontostand beträgt: ${balance} Coins`, ephemeral: true });
    },
};
