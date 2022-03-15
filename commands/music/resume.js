module.exports.run = async (client, message, args) => {
	if (!message.member.voice.channel)
		return message.channel.send(
			`${client.emotes.error} | Você deve estar em um canal de voz!`
		);
	const queue = client.distube.resume(message);
	message.channel.send(
		`${client.emotes.success} | Resumido! Agora tocando:\n${queue.songs[0].name}`
	);
};

module.exports.help = {
	name: "resume",
	description: "Este comando é usado para retomar a música.",
	accessableby: "Member",
	aliases: []
};
