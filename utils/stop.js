const Discord = require('discord.js');

async function execute(client, message, args, player, Discord, connection) {

	const vC = message.member.voice.channel;

	if(!vC) return message.reply('You need to be in a voice Channel!!');
	await player.stop(), connection.destroy();
	await message.reply('Stopping');
	}



module.exports = {
	name: 'stop',
	desciption: 'stop the music bot',
	execute,
}