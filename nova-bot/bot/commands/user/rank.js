const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rank')
        .setDescription('Zeigt deinen aktuellen Rang und Fortschritt an'),
    async execute(interaction) {
        const userId = interaction.user.id;
        const rank = await getUserRank(userId);
        const progress = await getUserProgress(userId);

        await interaction.reply({
            content: `🛡️ Dein aktueller Rang ist: **${rank.name}**\n\n**Fortschritt:** ${progress.currentXP}/${progress.maxXP} XP\n\nBelohnungen für den nächsten Rang:\nCoins: **5000**\nZugang zu exklusiven Casino-Spielen!`,
            ephemeral: true
        });
    },
};

// Beispiel-Datenbank für Rang- und Fortschrittsdaten
let userRanks = {
    "user1": { name: "Beginner", xp: 0 },
    "user2": { name: "Advanced", xp: 1500 },
};

// Fortschrittsberechnung
async function getUserRank(userId) {
    const xp = userRanks[userId]?.xp || 0;
    if (xp < 1000) {
        return { name: 'Beginner' };
    } else if (xp < 5000) {
        return { name: 'Advanced' };
    } else {
        return { name: 'Master' };
    }
}

async function getUserProgress(userId) {
    const xp = userRanks[userId]?.xp || 0;
    const maxXP = xp < 1000 ? 1000 : xp < 5000 ? 5000 : 10000;
    return { currentXP: xp, maxXP };
}
