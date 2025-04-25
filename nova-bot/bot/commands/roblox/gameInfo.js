const { SlashCommandBuilder } = require('discord.js');
const RobloxAPI = require('robloxsdk');  // Ersetze mit einer realen API

module.exports = {
    data: new SlashCommandBuilder()
        .setName('game')
        .setDescription('Zeigt die Spielinfos eines Roblox-Spiels an')
        .addStringOption(option => 
            option.setName('game_name')
                .setDescription('Name des Roblox-Spiels')
                .setRequired(true)),
    async execute(interaction) {
        const gameName = interaction.options.getString('game_name');
        
        try {
            const game = await RobloxAPI.getGameInfo(gameName);
            await interaction.reply({ content: `**Spielname**: ${game.name}\n**Beschreibung**: ${game.description}`, ephemeral: true });
        } catch (error) {
            await interaction.reply({ content: `Fehler beim Abrufen der Spielinformationen für ${gameName}.`, ephemeral: true });
        }
    },
};
    