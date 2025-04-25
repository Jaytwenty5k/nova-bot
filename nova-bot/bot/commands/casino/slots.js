const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('slots')
        .setDescription('Spiele Slots im Casino!'),
    async execute(interaction) {
        // Logik für die Slots hier
        const outcome = ['🍒', '🍋', '🍊', '🍒', '🍒'][Math.floor(Math.random() * 5)];
        await interaction.reply({
            content: `Du hast den Slot-Spielautomaten gespielt und: ${outcome}`,
            ephemeral: true,
        });
    },
};
    