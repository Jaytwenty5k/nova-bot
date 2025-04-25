const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('buyChannel')
        .setDescription('Kaufe einen Channel für deine Gruppe')
        .addStringOption(option => 
            option.setName('channel_name')
                .setDescription('Der Name des Channels, den du kaufen möchtest')
                .setRequired(true)),
    async execute(interaction) {
        const channelName = interaction.options.getString('channel_name');
        const price = 500;  // Beispielpreis

        await interaction.reply({ content: `Du hast den Channel **${channelName}** für ${price} Coins gekauft!`, ephemeral: true });
    },
};
