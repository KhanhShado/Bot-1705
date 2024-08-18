module.exports.config = {
	name: "reset",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "Khanh",
	description: "Khởi động lại bot",
	commandCategory: "admin",
	cooldowns: 0,
	dependencies: {
		"eval": ""
	}
};

module.exports.run = async ({ api, event, args, client, utils }) => {
    const eval = require("eval");
    return api.sendMessage("Vui Lòng Đợi 10s Để Bot Restart Lại", event.threadID, () => eval("module.exports = process.exit(1)", true), event.messageID);

}