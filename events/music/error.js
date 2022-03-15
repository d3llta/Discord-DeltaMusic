module.exports = async (client, message, err) => {
	message.channel.send(
		`${client.emotes.error} | Um erro foi encontrado!: \`${err}\``
	);
};
