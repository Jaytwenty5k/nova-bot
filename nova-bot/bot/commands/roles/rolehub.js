const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rolehub')
        .setDescription('Verwalte deine Rollen im Hub'),
    async execute(interaction) {
        // Hier eine Beispiel-Logik, wie man Rollen aus einem Hub kauft
        const availableRoles = ['Admin', 'Mod', 'VIP'];

        let roleMessage = 'Verfügbare Rollen im Hub:\n';
        availableRoles.forEach(role => {
            roleMessage += `**${role}** - 1000 Coins\n`; // Beispielpreis
        });

        await interaction.reply({ content: roleMessage, ephemeral: true });
    },
};
