const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Zeigt eine Hilfe-Seite mit allen Befehlen an'),
    async execute(interaction) {
        const helpMessage = `
        **Verfügbare Befehle:**
        - /ping: Antwortet mit Pong!
        - /balance: Zeigt dein Kontostand an
        - /verify: Verifiziert deinen Roblox-Account
        - /game: Zeigt Informationen zu einem Roblox-Spiel
        - /buyChannel: Kaufe einen Kanal
        - /casino: Starte dein eigenes Casino
        - /addRole: Fügt einem Benutzer eine Rolle hinzu
        - /ban: Bannt einen Benutzer
        `;
        
        await interaction.reply({ content: helpMessage, ephemeral: true });
    },
};
