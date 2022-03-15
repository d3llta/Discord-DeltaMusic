module.exports = async (client, message, queue, song) => {
	message.channel.send(
		`${client.emotes.success} | Adicionado ${song.name} - \`${song.formattedDuration}\` a fila!`
	);
};
