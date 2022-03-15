module.exports.run = async (client, message, args) => {
	if (!message.member.voice.channel)
		return message.channel.send(
			`${client.emotes.error} | Você deve estar em um canal de voz!`
		);
	if (!client.distube.isPlaying(message))
		return message.channel.send(
		`${client.emotes.error} | Não há nada tocando!`
		);
	const mode = client.distube.toggleAutoplay(message);
	message.channel.send(`Defina o modo de reprodução automática para\`${mode ? "On" : "Off"}\``);
};

module.exports.help = {
	name: "autoplay",
	description:
		"Este comando é usado para habilitar ou desabilitar os recursos de reprodução automática do sistema de música.",
	accessableby: "Member",
	aliases: []
};
