const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('categoryShop')
        .setDescription('Kaufe eine Kategorie für Channels'),
    async execute(interaction) {
        const categories = ['Gaming', 'Music', 'Chats'];
        const price = 1000;  // Beispielpreis

        let categoryMessage = 'Verfügbare Kategorien:\n';
        categories.forEach(category => {
            categoryMessage += `**${category}** - ${price} Coins\n`;
        });

        await interaction.reply({ content: categoryMessage, ephemeral: true });
    },
};
