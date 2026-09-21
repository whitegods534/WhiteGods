import { SlashCommandBuilder } from 'discord.js';

const FINANCIAL_OPERATIONS_ROLE = '1551601783581843497';

export default {
    data: new SlashCommandBuilder()
        .setName('auth')
        .setDescription('Authorize a Roblox user')
        .addStringOption(option =>
            option
                .setName('robloxuser')
                .setDescription('The Roblox username to authorize')
                .setRequired(true)
        ),

    async execute(interaction) {
        if (!interaction.member.roles.cache.has(FINANCIAL_OPERATIONS_ROLE)) {
            return interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
        }

        const username = interaction.options.getString('robloxuser');

        await interaction.reply({
            content: `Authorization request received for **${username}**.`
        });
    }
};
