module.exports.run = async (client, message, args) => {
	if (!message.member.voice.channel)
		return message.channel.send(
			`${client.emotes.error} | Você deve estar em um canal de voz!`
		);
	if (!client.distube.isPlaying(message))
		return message.channel.send(
			`${client.emotes.error} | Não há nada tocando!`
		);
	const queue = client.distube.skip(message);
	message.channel.send(
		`${client.emotes.success} | Pulado! Agora tocando:\n${queue.songs[0].name}`
	);
};

module.exports.help = {
	name: "skip",
	description: "Este comando é usado para pular músicas.",
	accessableby: "Manage Server",
	aliases: []
};
