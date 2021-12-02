const Discord = require("discord.js");
require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_VOICE_STATES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
	],
	partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const fs = require("fs");
//const memberCounter = require("./counters/member-counter");

client.events = new Discord.Collection();
client.commands = new Discord.Collection();
["command_handler", "event_handler"].forEach((handler) => {
	require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.DISCORD_TOKEN);
