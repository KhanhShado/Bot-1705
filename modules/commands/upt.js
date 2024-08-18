module.exports.config = {
	name: "upt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",// Đã mod thêm thời gian và ngày
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "Tiện ích",
	cooldowns: 5,
	dependencies: {
		"pidusage": "",
    "fast-speedtest-api": ""
	}
};
 
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
 
module.exports.run = async ({ api, event, args }) => {
		const fast = global.nodemodule["fast-speedtest-api"];
   const prefix = config.PREFIX
  const moment = require("moment-timezone");
	const axios = global.nodemodule["axios"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
   var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝙲𝚑𝚞̉ 𝙽𝚑𝚊̣̂𝚝'
  if (thu == 'Monday') thu = '𝚃𝚑𝚞̛́ 𝙷𝚊𝚒'
  if (thu == 'Tuesday') thu = '𝚃𝚑𝚞̛́ 𝙱𝚊'
  if (thu == 'Wednesday') thu = '𝚃𝚑𝚞̛́ 𝚃𝚞̛'
  if (thu == "Thursday") thu = '𝚃𝚑𝚞̛́ 𝙽𝚊̆𝚖'
  if (thu == 'Friday') thu = '𝚃𝚑𝚞̛́ 𝚂𝚊́𝚞'
  if (thu == 'Saturday') thu = '𝚃𝚑𝚞̛́ 𝙱𝚊̉𝚢'
    const res = await axios.get("https://api-kizz.kizz-kinncuti.repl.co/images/loli/");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
		const resault = await speedTest.getSpeed();
	const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
	return api.sendMessage("", event.threadID, () => api.sendMessage({body: `[🔔] → 𝙷𝚘̂𝚖 𝙽𝚊𝚢 𝙻𝚊̀ : ${thu}\n[🍞] → 𝐵𝑎̂𝑦 𝑔𝑖𝑜̛̀ 𝑙𝑎̀ : ${gio}\n[🕛] → 𝙼𝚘𝚗 Đ𝚊̃ 𝙷𝚘𝚊̣𝚝 Đ𝚘̂𝚗𝚐 Đ𝚞̛𝚘̛̣𝚌 : ${hours} 𝙶𝚒𝚘̛̀ ${minutes} 𝙿𝚑𝚞́𝚝 ${seconds} 𝙶𝚒𝚊̂𝚢\n[🥚] → 𝙿𝚒𝚗𝚐 : ${Date.now() - timeStart}𝐦𝐬\n[🥖] → 𝙵𝚕𝚊𝚜 : ${resault} 𝙼𝚋𝚜`, attachment: download}, event.threadID, event.messageID));
}