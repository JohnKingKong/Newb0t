	module.exports = 
{
	name: 'ping',
	description: "yolo ping command",
	execute(client, message, args)
	{
			message.channel.send('pong!!');
	}
}