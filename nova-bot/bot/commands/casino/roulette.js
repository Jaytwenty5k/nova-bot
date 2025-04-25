const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roulette')
        .setDescription('Setze auf eine Zahl oder eine Farbe im Roulette')
        .addStringOption(option => 
            option.setName('setze_auf')
                .setDescription('Setze auf eine Zahl (0-36) oder Farbe (rot/schwarz)')
                .setRequired(true))
        .addIntegerOption(option => 
            option.setName('wager')
                .setDescription('Betrag, den du setzen möchtest')
                .setRequired(true)),
    async execute(interaction) {
        const setzeAuf = interaction.options.getString('setze_auf');
        const wager = interaction.options.getInteger('wager');
        const userBalance = await getUserBalance(interaction.user.id); // Hol dir den Kontostand des Benutzers

        if (wager > userBalance) {
            return interaction.reply({ content: 'Du hast nicht genug Coins!', ephemeral: true });
        }

        // Roulette Logik
        const result = playRoulette(setzeAuf, wager);

        await interaction.reply({ content: result.message, ephemeral: true });
    },
};

// Funktion für Roulette
function playRoulette(setzeAuf, wager) {
    const number = Math.floor(Math.random() * 37); // Zufallszahl zwischen 0 und 36
    const color = number % 2 === 0 ? 'rot' : 'schwarz'; // Beispiel für Farben

    if (setzeAuf === number.toString() || setzeAuf === color) {
        return { message: `Du hast gewonnen und **${wager * 2} Coins** erhalten!` };
    } else {
        return { message: `Du hast verloren und **${wager} Coins** verloren.` };
    }
}
    