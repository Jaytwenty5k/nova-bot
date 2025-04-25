const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Würfle im Casino und gewinne!'),
    async execute(interaction) {
        // Logik für das Würfeln hier
        const roll = Math.floor(Math.random() * 6) + 1;
        await interaction.reply({
            content: `Du hast eine ${roll} geworfen!`,
            ephemeral: true,
        });
    },
};
