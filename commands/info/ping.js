const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const bbb = new Discord.MessageEmbed().setDescription(
		`:computer: │Latência da Mensagem: **${
			Date.now() - message.createdTimestamp
		}ms**\n:robot: │Latência da API do Discord: **${Math.round(client.ws.ping)}ms**`
	);
	message.channel.send(bbb);
};

module.exports.help = {
	name: "ping",
	description: "Este comando é usado para pingar o bot.",
	accessableby: "Members",
	aliases: []
};
