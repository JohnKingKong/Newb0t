module.exports = 
{
	name: 'ping',
	description: "yolo ping command",
	execute(message, args)
	{
			message.channel.send('pong!!');
	}
}