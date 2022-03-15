module.exports = async (client, message, queue, playlist) => {
	message.channel.send(
		`${client.emotes.success} | Adicionado \`${playlist.name}\` playlist (${
			playlist.songs.length
		} songs) a fila\n${client.status(queue)}`
	);
};
