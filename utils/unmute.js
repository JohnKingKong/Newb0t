module.exports = {
	name: "unmute",
	description: "This is to unmute a mentionned user",
	execute(client, message, args, Discord) {
		const member = message.mentions.users.first();
		if (member) {
			let mainRole = message.guild.roles.cache.find(
				(role) => role.name === "member"
			);
			let muteRole = message.guild.roles.cache.find(
				(role) => role.name === "muted"
			);
			let memberTarget = message.guild.members.cache.get(member.id);
			memberTarget.roles.remove(muteRole);
			memberTarget.roles.add(mainRole);
			message.reply(
				`GG ${args[0]}, you've been unmuted! Be careful next time!`
			);
		} else {
			message.reply(`You need to mention a user first!!!`);
		}
	},
};
