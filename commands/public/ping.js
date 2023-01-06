const { ChatInputCommandInteraction, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pong olarak cevaplar'),
    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
        interaction.reply({content: 'Pong!', ephemeral: true});
    }
}