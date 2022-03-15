module.exports.run = async (client, message, args) => {
	if (!message.member.voice.channel)
		return message.channel.send(
			`${client.emotes.error} | Você deve estar em um canal de voz!`
		);
	if (!client.distube.isPlaying(message))
		return message.channel.send(
			`${client.emotes.error} | Não há nada tocando!`
		);
	const queue = client.distube.pause(message);
	message.channel.send(`${client.emotes.success} | Pausado!`);
};
module.exports.help = {
	name: "pause",
	description:
		"Este comando é usado para pausar a música quando estiver dentro do canal de música.",
	accessableby: "Members",
	aliases: []
};
