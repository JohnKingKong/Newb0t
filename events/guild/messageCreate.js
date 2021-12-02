const Discord = require("discord.js");
require("dotenv").config();
module.exports = (client, Discord, message) => {
	const prefix = process.env.PREFIX;
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const cmd = args.shift().toLowerCase();
	const command =
		client.commands.get(cmd) ||
		client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

	try {
		command.execute(client, message, args, cmd, Discord);
	} catch (err) {
		message.reply("This is not a recognised command!");
		//console.log(err);
	}
};
