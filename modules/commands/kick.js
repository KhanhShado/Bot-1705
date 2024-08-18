module.exports.config = {
	name: "kick",
	version: "1.0.1", 
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "Xoá người bạn cần xoá khỏi nhóm bằng cách tag",
	commandCategory: "Hệ Thống", 
	usages: "[tag]", 
	cooldowns: 0,
};

module.exports.languages = {
	"vi": {
		"error": "Đã có lỗi xảy ra, vui lòng thử lại sau",
		"needPermssion": "Cần quyền quản trị viên nhóm\nVui lòng thêm và thử lại!",
		"missingTag": "Bạn phải tag người cần kick"
	},
	"en": {
		"error": "Error! An error occurred. Please try again later!",
		"needPermssion": "Need group admin\nPlease add and try again!",
		"missingTag": "You need tag some person to kick"
	}
}

module.exports.run = async function({ api, event, getText, Threads, Users }) {
	var mention = Object.keys(event.mentions);
	try {
		let dataThread = (await Threads.getData(event.threadID)).threadInfo;
    const name = await Users.getNameUser(event.senderID)
    let uid = event.senderID;
    var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
    const fs = require("fs-extra")
    const axios = require('axios');
var so = [
  "2","3","4","5","6"
];
const dongdev = so[Math.floor(Math.random()*so.length)];
  const imageUrls = await Promise.all(Array.from({ length: `${dongdev}` }, async () => {
    const res = await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`);
    return res.data.url;   
  }));
  const imgurl = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));

		if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(getText("needPermssion"), event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage({body:`[🍍] → Người Dùng : ${name}\n[🍒] → Bạn phải tag người cần kick\n[⏰️] → Bây Giờ Là : ${time}`,attachment: imgurl}, event.threadID);
		if (dataThread.adminIDs.some(item => item.id == event.senderID)) {
			for (const o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	} catch { return api.sendMessage(getText("error"),event.threadID) }
}