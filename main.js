const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./utils/').filter(file => file.endsWith('.js'));
for (const file of commandFiles)
{
	const command = require(`./utils/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready', () =>
{
	console.log('Newb0t is online');
});

client.on('messageCreate', message =>{
	if (!message.content.startsWith(prefix) || message.author.bot)
		return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping')
		client.commands.get('ping').execute(message, args);
	if (command === 'mod')
		client.commands.get('mod').execute(message, args);
	if (command === 'roles')
		client.commands.get('roles').execute(message, args);
});


client.login('OTAzNjg3ODIzNzg0MzEyODMy.YXwm3g.8VrweEkHg5Hwu8oRxqphrNNhRSc');
