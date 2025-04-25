const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('buyShares')
        .setDescription('Kaufe Anteile an einem Channel')
        .addStringOption(option => 
            option.setName('channel_name')
                .setDescription('Der Channel, an dem du Anteile kaufen möchtest')
                .setRequired(true))
        .addIntegerOption(option => 
            option.setName('amount')
                .setDescription('Anzahl der Anteile, die du kaufen möchtest')
                .setRequired(true)),
    async execute(interaction) {
        const channelName = interaction.options.getString('channel_name');
        const amount = interaction.options.getInteger('amount');

        // Hier könnte man die Logik für den Kauf der Anteile an einem Channel umsetzen
        await interaction.reply({ content: `Du hast **${amount}** Anteile an **${channelName}** gekauft.`, ephemeral: true });
    },
};
    