const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const ytsearch = require('yt-search');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, NoSubscriberbehavior } = require('@discordjs/voice');

async function execute(message, args) {
	const voiceChannel = message.member.voice.channel;

	if (!voiceChannel) return message.channel.send("You need to be in a Voice channel first");
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("You dont have the permssss")
	if (!args.length) return message.channel.send("Please enter some keywords to help me search");
	
	const connection = await joinVoiceChannel({
		channelId: message.member.voice.channel.id,
		guildId: message.guild.id,
		adapterCreator: message.guild.voiceAdapterCreator
	});

	const videoFinder = async (query) => {
		const videoResults = await ytsearch(query);

		return (videoResults.videos.length > 1) ? videoResults.videos[0] : null;

	}

	const video = await videoFinder(args.join(' '));

	if(video) {
		const stream = ytdl(video.url, {filter: 'audioonly'});
		const player = createAudioPlayer();
		const resource = createAudioResource(stream);
		await player.play(resource);
		connection.subscribe(player);
	//	.on('finish', ()=> {
	//		voiceChannel.leave();
	//	});

		await message.channel.send('Now playing : ***${video.title}***')
	}
}



module.exports = {
	name: 'play',
	description: 'Yolo play commands',
	execute,
}
