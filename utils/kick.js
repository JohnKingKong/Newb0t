module.exports = {
	name: "kick",
	description: "kick a member",
	execute(client, message, args, Discord) {
		const member = message.mentions.users.first();
		if (member) {
			const memberTarget = message.guild.members.cache.get(member.id);
			memberTarget.kick();
			message.reply(`${args[0]} is now kicked`);
		} else {
			message.reply("You need to mention a user first!!!");
		}
	},
};
