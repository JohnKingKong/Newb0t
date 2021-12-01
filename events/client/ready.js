module.exports = (client, Discord, memberCounter) => {
	console.log('Newb0t is ready!');
	const guild = client.guilds.cache.get('836985572991434823');

	setInterval(() => {
		const memberCount = guild.memberCount;
		const channel = guild.channels.cache.get('915437280099971072');
		channel.setName(`Total Members: ${memberCount.toLocaleString()}`)
		console.log(`Member count has been updated to ${memberCount.toLocaleString()}`);
	}, 60000);
}