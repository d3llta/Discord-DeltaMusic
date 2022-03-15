module.exports = async (client, message, result) => {
	let i = 0;
	message.channel.send(
		`**Escolha uma opção abaixo**\n${result
			.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``)
			.join("\n")}\n*Digite qualquer outra coisa ou espere 60 segundos para cancelar*`
	);
};
