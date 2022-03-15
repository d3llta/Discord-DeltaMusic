exports.run = async (client, message, args) => {
	const queue = client.distube.getQueue(message);
	if (!queue)
		return message.channel.send(
			`${client.emotes.error} | Não há nada tocando!`
		);
	const q = queue.songs
		.map(
			(song, i) =>
				`${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${
					song.formattedDuration
				}\``
		)
		.join("\n");
	message.channel.send(`${client.emotes.queue} | **Fila do servidor**\n${q}`);
};

module.exports.help = {
	name: "queue",
	description: "Este comando é usado para visualizar a fila do sistema de música.",
	accessableby: "Members",
	aliases: []
};
