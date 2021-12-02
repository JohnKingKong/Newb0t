/*module.exports = {
	name: "reactionrole",
	desription: "reaction roles baby",
	async execute(client, message, args, Discord) {
		const channel = "911626304149946388";
		const memberRole = message.guild.roles.cache.find(
			(role) => role.name === "member"
		);
		const loserRole = message.guild.roles.cache.find(
			(role) => role.name === "LOSERRRRR"
		);

		const memberEmoji = ":call_me:";
		const loserEmoji = ":closed_lock_with_key:";

		let embed = new Discord.MessageEmbed()
			.setFooter("Newb0t FTW!!!")
			.setAuthor("Newb0t")
			.setTitle("Welcome")
			.setColor("#d10e65")
			.setDescription(
				"Read the TOS if you accept, click on the good role! \n\n" +
					`${memberEmoji} for the member role\n` +
					`${loserEmoji} for the loser role`
			);

		let messageEmbed = await message.channel.send({ embeds: [embed] });
		messageEmbed.react("🤙");
		messageEmbed.react("🔐");
	},
};
*/
