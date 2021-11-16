const Discord = require('discord.js')

const embed = new Discord.MessageEmbed()
					.setTitle("Help Menu")
					.setColor('3ACE33')
					.setFooter("Newb0t FTW!!!")
					.setAuthor('Newb0t')
					.setTimestamp()
					.addFields(
						{ name: "For Utilities commands", value: "-\ Type utils"},
						{ name: "For Mods commands", value: "-\ Type mods"},
						{ name: "For Music related commands", value: '-\ Type Music'},
						{ name: "For Minecraft related commands", value:'-\ Type Mc'},
						{ name: "For Sea of Thieves related commands", value: '-\ Type SOT'},
						{ name: "For Twitch related commands", value: '-\ Type Twitch'},
						{ name: "For Other commands", value: "-\ Type other"}
					)

const utilsembed = new Discord.MessageEmbed()				
						.setTitle("Utils commands")
						.setColor('3ACE33')
						.setFooter("Newb0t FTW!!!")
						.setAuthor('Newb0t')
						.addFields(
							{ name: 'clear', value: "Deletes multiple messages in a channel"},
							{ name: 'Soon', value: 'avatar, ID, nick history, number of ppl in channel, member count, time in other zones, dictionnary, translate, currency, polls'}
						)

const modsembed = new Discord.MessageEmbed()
						.setTitle('Mods commands')
						.setColor('3ACE33')
						.setAuthor('Newb0t')
						.setFooter('Newb0t FTW!!!')
						.setTimestamp()
						.addFields(
							{ name: 'mod', value: 'Check wheter or not you have the mod role, and adds it if you want'},
							{ name: 'Soon', value: 'mute/unmute, ban, kick, timed mute, player info(date joined, nb of msgs sent, nb of warnings), lock/unlock channel, slowmode on/off'}
						)

const musicembed = new Discord.MessageEmbed()
						.setTitle('Music commands')
						.setAuthor('Newb0t')
						.setColor('3ACE33')
						.setFooter('Newb0t FTW!!!')
						.setTimestamp()
						.addFields(
							{ name: 'Soon', value: 'Fully complete music bot via youtube, with search per words, queue system, pause, play, stop, skip, remove song fromm queue, add Dj roles, etc'}
						)

const mcembed = new Discord.MessageEmbed()
					.setTitle('Minecraft commands')
					.setColor('3ACE33')
					.setAuthor('Newb0t')
					.setFooter('Newb0t FTW!!!')
					.setTimestamp()
					.addFields(
						{ name: 'Soon', value: 'recipe dictionnary, mobs infos, general knowledege, who is online on a server atm, get skins/UUID/alts names, get 9b joindate, coords logger'}
					)

const sotembed = new Discord.MessageEmbed()
					.setTitle('Sea of Thieves commands')
					.setColor('3ACE33')
					.setAuthor('Newb0t')
					.setFooter('Newb0t FTW!!!')
					.setTimestamp()
					.addFields(
						{ name: 'Soon', value:'Fishes dictionnary, tall tales journal locations, patches notes, random knowledge trivia, map, storm locator, fleet creator integration'}
					)
	
const twitchembed = new Discord.MessageEmbed()
					.setTitle('Twitch commands')
					.setColor('3ACE33')
					.setAuthor('Newb0t')
					.setFooter('Newb0t FTW!!!')
					.setTimestamp()
					.addFields(
						{ name: 'Soon', value:'username verifier, live or not, shout out, roles, clips call, gen channel stats'}
					)

const otherembed = new Discord.MessageEmbed()
					.setTitle('Other commands')
					.setColor('3ACE33')
					.setAuthor('Newb0t')
					.setFooter('Newb0t FTW!!!')
					.setTimestamp()
					.addFields(
						{ name: 'Soon', value:'any other commands like quizzes, info on the bot, version, etc'}
					)

function execute(message, args){

	message.channel.send({ embeds: [embed] });

	const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time : 3000});
						const txt = message => {
							if (message.content.toLowerCase() == 'utils') {
								message.channel.send({ embeds: [utilsembed] });
								collector.removeListener('collect', txt);
							}
							else if (message.content.toLowerCase() == 'mods') {
								message.channel.send({ embeds: [modsembed] });
								collector.removeListener('collect', txt);
							}
							else if (message.content.toLowerCase() == 'music') {
								message.channel.send({ embeds: [musicembed] });
								collector.removeListener('collect', txt);
							}
							else if (message.content.toLowerCase() == 'mc') {
								message.channel.send({ embeds: [mcembed] });
								collector.removeListener('collect', txt);
							}
							else if (message.content.toLowerCase() == 'sot') {
								message.channel.send({ embeds: [sotembed] });
								collector.removeListener('collect', txt);
							}
							else if (message.content.toLowerCase() == 'twitch') {
								message.channel.send({ embeds: [twitchembed] });
								collector.removeListener('collect', txt);
							}
							else if (message.content.toLowerCase() == 'other') {
								message.channel.send({ embeds: [otherembed] });
								collector.removeListener('collect', txt);
							}
							else if (!message.author.bot) {
								message.channel.send("Please enter a valid command!");
							}
						}
	collector.on('collect', txt);
}

module.exports = {
	name: 'help',
	description: 'yolo help command',
	execute
}