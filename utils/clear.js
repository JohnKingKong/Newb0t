const Discord = require('discord.js');



async function execute(message,args){
	embed = new Discord.MessageEmbed()
					.setFooter("Newb0t FTW!!!!")
					.setAuthor('Newb0t')
					.setTitle('Clear command')
					.setColor('93230B')
	if (!args[0] || (isNaN(args[0]))){
		embed.addFields({name: 'Oh Oh!!', value: 'You gotta enter a number!'})
		return message.reply({embeds: [embed] });
	}
	if (args[0] < 1){
		embed.addFields({name: 'Oh Oh!!', value: "You can't delete less than a message... Come on man!"})
		return message.reply({ embeds: [embed] });
	}
	if (args[0] >= 100){
		embed.addFields({name: 'Oh Oh!!', value: "You can't delete more than a hundred messages..."})
		return message.reply({ embeds: [embed] });
	}
	else {
		mess = Number(args[0]);
		mess += 1;
		embed.addFields({name: 'Deleting', value: `${args[0]} messages`})
		await message.channel.messages.fetch({limit: mess}).then(messages =>{
			console.log(messages) 
			message.channel.bulkDelete(messages).catch()
		})	
		message.channel.send({ embeds: [embed] }).then(msg => {
		setTimeout(() => msg.delete(),3000);}).catch();
	}
	
}

module.exports = {
	name: 'clear',
	description: 'Yolo command clear',
	execute,
}