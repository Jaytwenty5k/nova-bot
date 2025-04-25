const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('blackjack')
        .setDescription('Spiele eine Runde Blackjack')
        .addIntegerOption(option => 
            option.setName('wager')
                .setDescription('Betrag, den du setzen möchtest')
                .setRequired(true)),
    async execute(interaction) {
        const wager = interaction.options.getInteger('wager');
        const userBalance = await getUserBalance(interaction.user.id); // Hol dir den Kontostand des Benutzers

        if (wager > userBalance) {
            return interaction.reply({ content: 'Du hast nicht genug Coins!', ephemeral: true });
        }

        // BlackJack Spiel-Logik (vereinfacht)
        const result = playBlackjack(wager); // Funktion, die das Blackjack-Spiel ausführt

        await interaction.reply({ content: result.message, ephemeral: true });
    },
};

// Funktion, die das Blackjack-Spiel ausführt
function playBlackjack(wager) {
    const win = Math.random() > 0.5; // Zufallsgenerator für Gewinn oder Verlust
    if (win) {
        return { message: `Du hast gewonnen und **${wager * 2} Coins** erhalten!` }; // Beispiel, Gewinn verdoppelt den Einsatz
    } else {
        return { message: `Du hast verloren und **${wager} Coins** verloren.` };
    }
}
