const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("pause").setDescription("Pause the music"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("There are no songs in the queue")

		queue.setPaused(true)
        await interaction.editReply("https://tenor.com/view/peepo-leave-pepe-frog-bye-upset-im-out-gif-17020829")
	},
}