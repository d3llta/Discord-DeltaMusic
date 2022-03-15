module.exports = async (client, message, queue, playlist, song) => {
	message.channel.send(
		`${client.emotes.play} | Tocando \`${playlist.name}\` playlist (${
			playlist.songs.length
		} songs).\nTocando Agora \`${song.name}\` - \`${
			song.formattedDuration
		}\`\n${client.status(queue)}`
	);
};
