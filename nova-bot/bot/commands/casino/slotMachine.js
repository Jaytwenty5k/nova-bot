const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('slotmachine')
        .setDescription('Spiele die Slotmaschine im Casino!'),
    async execute(interaction) {
        // Erweiterte Logik für die Slotmaschine hier
        const result = ['🍒', '🍋', '🍊', '🍒', '🍒'][Math.floor(Math.random() * 5)];
        await interaction.reply({
            content: `Du hast die Slotmaschine gespielt und: ${result}`,
            ephemeral: true,
        });
    },
};
