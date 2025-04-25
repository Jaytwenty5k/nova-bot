const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Zeigt das Leaderboard der besten Casino-Spieler an'),
    async execute(interaction) {
        const leaderboard = await getLeaderboard(); // Hol dir das Leaderboard aus der Datenbank

        if (leaderboard.length === 0) {
            return interaction.reply({ content: 'Es gibt noch keine Spieler im Leaderboard.', ephemeral: true });
        }

        let leaderboardMessage = '🏆 **Casino Leaderboard** 🏆\n';
        leaderboard.forEach((player, index) => {
            leaderboardMessage += `${index + 1}. ${player.username} - **${player.coins} Coins**\n`;
        });

        await interaction.reply({ content: leaderboardMessage, ephemeral: true });
    },
};

// Beispiel einer Funktion, um das Leaderboard zu holen (kann mit einer Datenbank oder In-Memory-Objekt ersetzt werden)
async function getLeaderboard() {
    return [
        { username: 'Player1', coins: 1000 },
        { username: 'Player2', coins: 800 },
        { username: 'Player3', coins: 650 },
    ];
}
    