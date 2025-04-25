const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('janitor')
        .setDescription('Reagiere auf anstößige Nachrichten als Janitor'),
    async execute(interaction) {
        // Logik für den Job "Janitor"
        await interaction.reply({ content: 'Du hast den Job **Janitor** übernommen! Reagiere auf anstößige Nachrichten.', ephemeral: true });

        // Hier könnte man Nachrichten überwachen und eine entsprechende Reaktion anzeigen
    },
};
