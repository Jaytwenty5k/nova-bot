const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addRole')
        .setDescription('Füge einem Benutzer eine Rolle hinzu')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('Der Benutzer, dem du eine Rolle zuweisen möchtest')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('role')
                .setDescription('Die Rolle, die zugewiesen werden soll')
                .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const role = interaction.options.getString('role');

        const member = await interaction.guild.members.fetch(user.id);
        const roleToAssign = interaction.guild.roles.cache.find(r => r.name === role);

        if (roleToAssign) {
            await member.roles.add(roleToAssign);
            await interaction.reply({ content: `Die Rolle **${role}** wurde ${user.tag} zugewiesen!`, ephemeral: true });
        } else {
            await interaction.reply({ content: `Die Rolle **${role}** existiert nicht.`, ephemeral: true });
        }
    },
};
