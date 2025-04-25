const { SlashCommandBuilder } = require('discord.js');
const RobloxAPI = require('robloxsdk');  // Fiktive API, sollte mit echter API ersetzt werden

module.exports = {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('Verifiziert deinen Roblox-Account')
        .addStringOption(option => 
            option.setName('username')
                .setDescription('Der Roblox-Benutzername')
                .setRequired(true)),
    async execute(interaction) {
        const username = interaction.options.getString('username');
        
        try {
            const user = await RobloxAPI.getUserByUsername(username);
            await interaction.reply({ content: `Der Roblox-Benutzer ${user.username} ist verifiziert!`, ephemeral: true });
        } catch (error) {
            await interaction.reply({ content: `Fehler bei der Verifizierung des Benutzers ${username}.`, ephemeral: true });
        }
    },
};
