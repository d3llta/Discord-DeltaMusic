const express = require("express");
const server = express();
server.all("/", (req, res) => {
	res.send("RECEBA!!!!!!!!!!!!!!!!");
});

function keepAlive() {
	server.listen(3000, () => {
		console.log("Server ON!");
	});
}

module.exports = keepAlive;
