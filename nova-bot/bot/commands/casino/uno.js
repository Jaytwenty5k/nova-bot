const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uno')
        .setDescription('Spiele eine Runde UNO'),
    async execute(interaction) {
        // UNO Spiel-Logik (vereinfacht)
        const result = playUNO(); // Funktion, die das UNO-Spiel ausführt

        await interaction.reply({ content: result.message, ephemeral: true });
    },
};

// Funktion für UNO
function playUNO() {
    const won = Math.random() > 0.5; // Zufallsgenerator für Sieg oder Niederlage
    if (won) {
        return { message: `Du hast gewonnen!` };
    } else {
        return { message: `Du hast verloren.` };
    }
}
    