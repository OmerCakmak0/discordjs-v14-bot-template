const { ChatInputCommandInteraction } = require('discord.js')

module.exports = {
    name: 'interactionCreate',
    /**
     * @param {ChatInputCommandInteraction} interaction
     */

    execute(interaction, client) {
        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if (!command) return interaction.reply({
            content: 'Bu komut kullanılmamaktadır',
            ephemeral: true
        });
        if (command.developer && interaction.user.id !== '680846454935650318')
            return interaction.reply({
                content: 'Bu komutu yalnızca botun geliştiricisi kullanabilir',
                ephemeral: true
            });
        const subCommand = interaction.options.getSubcommand(false);
        if (subCommand) {
            const subCommandFile = client.subCommands.get(`${interaction.commandName}.${subCommand}`);
            if (!subCommandFile) return interaction.reply({
                content: 'Bu Alt Komut kullanılmamaktadır',
                ephemeral: true
            });
            subCommandFile.execute(interaction, client);
        } else command.execute(interaction, client);
    }
}