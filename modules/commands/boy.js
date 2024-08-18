module.exports.config = {
	name: "boy",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh trai",
	commandCategory: "Random-IMG",
	usages: "boy",
	cooldowns: 2
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apituandz1407.herokuapp.com/api/trai.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `=== 『 𝗧𝗥𝗔𝗜 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗔̉𝗻𝗵 𝘁𝗿𝗮𝗶 𝗰𝘂̉𝗮 𝗰𝗮́𝗰 𝗰𝗵𝗶̣ 𝗲𝗺 𝗽𝗵𝘂̣ 𝗻𝘂̛̃ 𝗻𝗲̀ 😤\n→ 𝗦𝗼̂́ 𝗮̉𝗻𝗵: 382`,
						attachment: fs.createReadStream(__dirname + `/cache/boy.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boy.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/boy.${ext}`)).on("close", callback);
			})
}