module.exports.run = async (client, message, args) => {
	if (!message.member.voice.channel) {
		return message.channel.send(
			`${client.emotes.error} | Você deve estar em um canal de voz!`
		);
	}
	if (!client.distube.isPlaying(message)) {
		return message.channel.send(
			`${client.emotes.error} | Não há nada tocando!`
		);
	}
	const volume = parseInt(args[0]);
	if (isNaN(volume)) {
		return message.channel.send(
			`${client.emotes.error} | Por favor, insira um número válido!`
		);
	}
	client.distube.setVolume(message, volume);
	message.channel.send(
		`${client.emotes.success} | Volume definido para \`${volume}\``
	);
};

module.exports.help = {
	name: "volume",
	description:
		"Este comando é usado para alterar o volume ao tocar as músicas",
	accessableby: "Member",
	aliases: []
};
