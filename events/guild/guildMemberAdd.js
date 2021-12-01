const Discord = require('discord.js')

const memberEmoji = ':call_me:';
const loserEmoji = ':closed_lock_with_key:';

const embed = new Discord.MessageEmbed()
					.setFooter("Newb0t FTW!!!")
					.setAuthor('Newb0t')
					.setTitle('Welcome')
					.setColor('#d10e65')
					.setDescription('Read the TOS if you accept, click on the good role! \n\n'
						+ `🤙 for the member role\n`
						+ `🔐 for the loser role`);

module.exports = async (client, message, member, Discord) => {
		const channel = '911626304149946388';
		const memberRole = member.guild.roles.cache.find(role => role.name === 'member');
		const loserRole = member.guild.roles.cache.find(role => role.name === 'LOSERRRRR');

		let messageEmbed = await client.channels.cache.get(channel).send({ embeds: [embed] });
		messageEmbed.react("🤙");
		messageEmbed.react("🔐");

	}

/*module.exports = (Discord,client, member) => {
	let welcomerole = member.guild.roles.cache.find(role => role.name === 'member');
	member.roles.add(welcomerole.id);
	console.log(member);
	member.guild.channels.fetch('911626304149946388').then(channel => channel.send(`welcome @${member.user} to the fam, fam!!`));
}*/