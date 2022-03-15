module.exports.run = async (client, message, args) => {
	if (!message.member.voice.channel)
		return message.channel.send(
			`${client.emotes.error} | Você deve estar em um canal de voz!`
		);
	if (!client.distube.isPlaying(message))
		return message.channel.send(
			`${client.emotes.error} | Não há nada tocando!`
		);
	client.distube.stop(message);
	message.channel.send(`${client.emotes.success} | Parada!`);
};

module.exports.help = {
	name: "stop",
	description: "Este comando é usado para parar a música.",
	accessableby: "Member",
	aliases: ["s", "dc", "fuckoff", "disconnect"]
};
