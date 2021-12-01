module.exports = {
	name: 'ban',
	description: 'ban a mentionned user',
	execute (client, message, args, Discord) {
		const member = message.mentions.users.first();
		if (member){
			const memberTarget = message.guild.members.cache.get(member.id);
			memberTarget.ban();
			message.reply(`${arg[0]} is now banned!!`);

		} else {
			message.reply('You need to mention a user first!!!');
		}
	}
}