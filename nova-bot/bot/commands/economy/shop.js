const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shop')
        .setDescription('Zeigt die verfügbaren Shop-Artikel an'),
    async execute(interaction) {
        const items = [
            { name: 'Item1', price: 100 },
            { name: 'Item2', price: 200 },
        ];

        let shopMessage = 'Verfügbare Artikel:\n';
        items.forEach(item => {
            shopMessage += `**${item.name}** - ${item.price} Coins\n`;
        });

        await interaction.reply({ content: shopMessage, ephemeral: true });
    },
};
