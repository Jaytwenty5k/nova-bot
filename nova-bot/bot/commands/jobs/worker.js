const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('worker')
        .setDescription('Übernimm einfache Aufgaben als Worker'),
    async execute(interaction) {
        // Logik für den Job "Worker"
        await interaction.reply({ content: 'Du hast den Job **Worker** übernommen! Erledige einfache Aufgaben wie das Sammeln von Ressourcen.', ephemeral: true });
    },
};
    