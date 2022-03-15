module.exports.run = async (client, message, args) => {
	if (!message.member.voice.channel)
		return message.channel.send(
			`${client.emotes.error} | Você deve estar em um canal de voz!`
		);
	const string = args.join(" ");
	if (!string)
		return message.channel.send(
			`${client.emotes.error} | Insira o URL da música ou o nome para pesquisar.`
		);
	try {
		client.distube.play(message, string);
	} catch (e) {
		message.channel.send(`${client.emotes.error} | Erro: \`${e}\``);
	}
};

module.exports.help = {
	name: "play",
	description: "Este comando é usado para tocar algumas músicas que você gosta.",
	accessableby: "Members",
	aliases: ["p"]
};
