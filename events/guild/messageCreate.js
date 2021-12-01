const Discord = require('discord.js');
require('dotenv').config();
module.exports = (client, Discord, message) => {
	const prefix = process.env.PREFIX;
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args    = message.content.slice(prefix.length).split(/ +/);
	const cmd     = args.shift().toLowerCase();

	const command = client.commands.get(cmd);

	//if (command) command.execute(client, message, args, Discord);

	try {
		command.execute(client, message, args, Discord, command);
	} catch(err) {
		message.reply("This is not a recognised command!");
		//console.log(err);
	}
}