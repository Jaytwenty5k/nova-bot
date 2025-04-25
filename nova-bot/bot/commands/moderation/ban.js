const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Banne einen Benutzer')
        .addUserOption(option => 
            option.setName('target')
                .setDescription('Der Benutzer, den du bannen möchtest')
                .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        
        try {
            await interaction.guild.members.ban(user);
            await interaction.reply({ content: `${user.tag} wurde gebannt!`, ephemeral: true });
        } catch (error) {
            await interaction.reply({ content: `Fehler beim Bannen von ${user.tag}.`, ephemeral: true });
        }
    },
};
