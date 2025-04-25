const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('russianroulette')
        .setDescription('Spiele Russian Roulette')
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

        // Russian Roulette Logik
        const result = playRussianRoulette(wager);

        await interaction.reply({ content: result.message, ephemeral: true });
    },
};

// Funktion für Russian Roulette
function playRussianRoulette(wager) {
    const survive = Math.random() > 0.2; // 80% Überlebenschance, 20% Tod

    if (survive) {
        return { message: `Du hast überlebt und **${wager} Coins** gewonnen!` };
    } else {
        return { message: `Du hast verloren und **${wager} Coins** verloren. RIP.` };
    }
}
    