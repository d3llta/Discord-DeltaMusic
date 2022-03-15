module.exports.run = async (client, message, args) => {
	if (!message.member.voice.channel)
		return message.channel.send(
			`${client.emotes.error} | Você deve estar em um canal de voz!`
		);
	if (!client.distube.isPlaying(message))
		return message.channel.send(
			`${client.emotes.error} | Você deve estar em um canal de voz!!`
		);
	let mode = null;
	switch (args[0]) {
		case "off":
			mode = 0;
			break;
		case "song":
			mode = 1;
			break;
		case "queue":
			mode = 2;
			break;
	}
	mode = client.distube.setRepeatMode(message, mode);
	mode = mode ? (mode == 2 ? "Repetir fila" : "Repetir música") : "Off";
	message.channel.send(
		`${client.emotes.repeat} | Defina o modo de repetição para \`${mode}\``
	);
};

module.exports.help = {
	name: "loop",
	description: "Este comando é usado para repetir as músicas no sistema de música.",
	accessableby: "Connecting to Voice channel",
	aliases: []
};
