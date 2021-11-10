const Discord = require('discord.js');

function execute (message, args){
	var txt;
		if(message.member.roles.cache.has('904750020182573106'))
			message.channel.send('You already have this role!!');
		else
		{
			message.channel.send("You dont have this role yet, do you want me to add you?");
			
			const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 3000 });
			const txt = message => {
				if(message.content.toLowerCase() == 'yes')
				{
					message.member.roles.add('904750020182573106').catch(console.error);
					message.channel.send('Done baby!');
					collector.removeListener('collect', variabl);

				}
				else if(message.content.toLowerCase() == 'no')
				{
					message.channel.send('ok');
					collector.removeListener('collect', variabl);
				}
				else if (!message.author.bot){
					message.channel.send("You need to enter yes or no!!");
				}
			}
			collector.on('collect', variabl);
		}
}

module.exports = {
	name: 'mod',
	description: "yolo mod command",
	execute,
}