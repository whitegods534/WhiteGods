import { SlashCommandBuilder } from 'discord.js';

const FINANCIAL_OPERATIONS_ROLE = '1551601783581843497';
const SUPPORT_ROLE = '1544700169277280368';

export default {
    data: new SlashCommandBuilder()
        .setName('check')
        .setDescription('Check a Roblox user')
        .addStringOption(option =>
            option
                .setName('robloxuser')
                .setDescription('The Roblox username to check')
                .setRequired(true)
        ),

    async execute(interaction) {
        const hasAccess =
            interaction.member.roles.cache.has(FINANCIAL_OPERATIONS_ROLE) ||
            interaction.member.roles.cache.has(SUPPORT_ROLE);

        if (!hasAccess) {
            return interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
        }

        const username = interaction.options.getString('robloxuser');

        return interaction.reply({
            content: `Checking authorization for **${username}**...`
        });
    }
};
