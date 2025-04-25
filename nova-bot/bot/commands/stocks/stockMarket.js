const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stockMarket')
        .setDescription('Kaufe und verkaufe Anteile an Channels'),
    async execute(interaction) {
        const stocks = [
            { name: 'GamingChannel', value: 100 },
            { name: 'MusicChannel', value: 200 },
        ];

        let stockMessage = 'Verfügbare Anteile:\n';
        stocks.forEach(stock => {
            stockMessage += `**${stock.name}** - Wert: ${stock.value} Coins\n`;
        });

        await interaction.reply({ content: stockMessage, ephemeral: true });
    },
};
