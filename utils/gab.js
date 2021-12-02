const Discord = require("discord.js");
const ytdl = require("ytdl-core");
//const ytsearch = require('yt-search');
const {
	joinVoiceChannel,
	createAudioPlayer,
	AudioPlayerStatus,
	createAudioResource,
	NoSubscriberbehavior,
} = require("@discordjs/voice");

async function execute(client, message, args, Discord) {
	const connection = await joinVoiceChannel({
		channelId: message.member.voice.channel.id,
		guildId: message.guild.id,
		adapterCreator: message.guild.voiceAdapterCreator,
	});

	const stream = ytdl("https://www.youtube.com/watch?v=kt-87w3gR2E", {
		filter: "audioonly",
	});
	const player = createAudioPlayer();
	const resource = createAudioResource(stream);
	await player.play(resource, { seek: 0, volume: 1000 });
	connection.subscribe(player);
	player.on(AudioPlayerStatus.Idle, () => {
		setTimeout(() => {
			player.stop(), connection.destroy(), 3000;
		});
	});
}

module.exports = {
	name: "gab",
	description: "weird ass command",
	execute,
};
