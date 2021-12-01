const ms = require('ms');

function execute (client, message, args, Discord) {
		const member = message.mentions.users.first();
		if(member) {
					let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
					let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
		
					let memberTarget = message.guild.members.cache.get(member.id);
					
					if	(!args[1]){	
						memberTarget.roles.remove(mainRole);
						memberTarget.roles.add(muteRole);
						message.reply(`Listen ${args[0]}, you've been muted until further notice, you Dumbass`)
						return;
					}
					memberTarget.roles.remove(mainRole);
					memberTarget.roles.add(muteRole);
					message.reply(`Listen ${args[0]}, you've been muted for ${ms(ms(args[1]))}`);

					setTimeout(function(){
						memberTarget.roles.remove(muteRole);
						memberTarget.roles.add(mainRole);
						message.reply(`GG ${args[0]}, you've been unmuted! Be careful next time!`);
					}, ms(args[1]));
		} else {
			message.reply(`You need to mention a user first!!!`)
		}
	}

module.exports = {
	name: 'mute',
	description: 'This is to mute a mentionned user',
	execute,	
}