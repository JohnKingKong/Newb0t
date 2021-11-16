const Discord = require('discord.js');

function execute (message, args){
	var txt;
	embed = new Discord.MessageEmbed()
					.setFooter("Let's Go Mod team!!!")
					.setAuthor('Newb0t FTW!!')
					.setTitle('Mod Role')
					.setColor('#d10e65')
		if(message.member.roles.cache.has('904750020182573106'))
		{embed.addFields(
						{name: 'You got it!', value: 'You already have this role!!'}
					);
			message.reply({embeds: [embed] });
		}
		else
		{
			embed.addFields(
				{name: 'oh no!', value: 'You dont have this role yet, do you want me to add you?'}
			);
			message.reply({ embeds: [embed] });
			const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 3000 });
			const txt = message => {
				if(message.content.toLowerCase() == 'yes'){
					message.member.roles.add('904750020182573106').catch(console.error);
					message.reply('Done baby!');
					collector.removeListener('collect', txt);
				}
				else if(message.content.toLowerCase() == 'no'){
					message.reply('ok');
					collector.removeListener('collect', txt);
				}
				else if (!message.author.bot){
					message.reply("You need to enter yes or no!!");
				}
			}
			collector.on('collect', txt);
		}
}

module.exports = {
	name: 'mod',
	description: "yolo mod command",
	execute,
}