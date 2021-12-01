const ytdl = require('ytdl-core');
const ytsearch = require('yt-search');
const { joinVoiceChannel, createAudioPlayer, AudioPlayerStatus, createAudioResource, NoSubscriberbehavior } = require('@discordjs/voice');


const queue = new Map();

module.exports = {
	name: 'play',
	description: 'music bot',
	//aliases: ['skip', 'stop'],
	async execute(client, message, args, cmd, Discord) {

		const vC = message.member.voice.channel;
		if (!vC) return message.reply('You need to be in a voice channel dumbass!');

		const permissions = vC.permissionsFor(message.client.user);
		if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("You dont have the permssss")

		const server_queue = queue.get(message.guild.id)
		
	//	if (cmd === 'play') {
			console.log('YOLO!!');
			if (!args.length) return message.channel.send("Please enter some keywords to help me search");
			let song = {};


			if (ytdl.validateURL(args[0])) {
				const song_info = await ytdl.getInfo(args[0]);
				song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
			} else {
				const videofinder = async (query) => {
					const videoresults = await ytsearch(query);
					return (videoresults.videos.length > 1) ? videoresults.videos[0] : null;
				};
				const video = await videofinder(args.join(' '));
				if(video) {
					song = { title: video.title, url: video.url }
				} else {
					message.reply('There have been an error!');
		 		} 
	//	 	}

		if (!server_queue) {

			const queue_constructor = {
				voice_channel: vC,
				text_channel: message.channel,
				connection: null,
				songs: []
			}

			queue.set(message.guild.id, queue_constructor);
			queue_constructor.songs.push(song);

			try {
				const connection = await joinVoiceChannel({
					channelId: message.member.voice.channel.id,
					guildId: message.guild.id,
					adapterCreator: message.guild.voiceAdapterCreator
				});
				queue_constructor.connection = connection;
				video_player(message.guild, queue_constructor.songs[0]);
			} catch (err) {
				queue.delete(message.guild.id);
				message.reply('There has been an issue!');
				throw err;
			}
		} else {
			server_queue.songs.push(song);
			return message.channel.send(`${song.title} has been added to the queue!`);
		}
	}
}
}
const video_player = async (guild, song, message) => {
	const song_queue = queue.get(guild.id);

	if (!song) {
		song_queue.connection.destroy();
		queue.delete(guild.id);
		console.log('the fuck');
		return;
	}
	const stream = ytdl(song.url, {filter: 'audioonly'});
	const player = createAudioPlayer();
	const resource = createAudioResource(stream);
	await player.play(resource, {seek: 0, volume: 1});
	song_queue.connection.subscribe(player);
	player.on(AudioPlayerStatus.Idle, () => {
		song_queue.songs.shift();
		video_player(guild, song_queue.songs[0]);
	});
		await song_queue.text_channel.send(`<:youtube:910636711875317771> Now playing : ***${song.title}***`);

} 




























/*const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const ytsearch = require('yt-search');
const { joinVoiceChannel, createAudioPlayer, AudioPlayerStatus, createAudioResource, NoSubscriberbehavior } = require('@discordjs/voice');

async function execute(client, message, args, Discord) {
	
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

	const videofinder = async (query) => {
		const videoresults = await ytsearch(query);
		return (videoresults.videos.length > 1) ? videoresults.videos[0] : null;
	}

	const video = await videofinder(args.join(' '));

	if(video) {
		const stream = ytdl(video.url, {filter: 'audioonly'});
		const player = createAudioPlayer();
		const resource = createAudioResource(stream);

		await player.play(resource, {seek: 0, volume: 1});
		connection.subscribe(player);
	/*	player.on(AudioPlayerStatus.Idle, () => {
			setTimeout(() => {(player.stop(),connection.destroy(),3000)})
		});
		await message.reply(`<:youtube:910636711875317771> Now playing : ***${video.title}***`);
	}
}

module.exports = {
	name: 'play',
	description: 'Yolo play commands',
	execute,
}
*/