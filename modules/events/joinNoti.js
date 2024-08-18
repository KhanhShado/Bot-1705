module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "naru06",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users  }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
  ////////////////////////////////////////////////////////
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["joinNoti"] != "undefined" && thread["joinNoti"] == false) return;
  ///////////////////////////////////////////////////////
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`『 ${global.config.PREFIX} 』⪼  ${(!global.config.BOTNAME) ? "Made by Duy" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`✰𝗞ế𝘁 𝝢ố𝗶 𝗧𝗵à𝗻𝗵 𝗖ô𝗻𝗴✰\n𝗫𝗶𝗻 𝗖𝗵à𝗼 𝗧ớ 𝗟à 𝗕𝗼𝘁 Đượ𝗰 Đ𝗶ề𝘂 𝗛à𝗻𝗵 𝗕ở𝗶 𝝖𝗱𝗺𝗶𝗻 𝐌𝐢𝐞𝐌𝐢𝐧 Đ𝘁𝗿𝘆\n☫--------------☫\n[❌] ⪼ 𝗠ọ𝗶 𝝢𝗴ườ𝗶 Đừ𝗻𝗴 𝗦𝗽𝗮𝗺 𝗕é 𝝢𝗵𝗮🙆\n[📋] ⪼ 𝗗𝗮𝗻𝗵 𝗦á𝗰𝗵 𝗟ệ𝗻𝗵 𝗦ử 𝗗ụ𝗻𝗴 &help 𝗛𝗼ặ𝗰 &help all\n☫--------------☫\n[🌐] ⪼ 𝗟𝗶𝗻𝗸 𝗙𝗮𝗰𝗲 𝝖𝗱𝗺𝐢𝗻: https://www.facebook.com/m.mwzin02\n[🤔] ⪼ 𝗠ọ𝗶 𝗧𝗵ắ𝗰 𝗠ắ𝗰 𝗩𝘂𝗶 𝗟ò𝗻𝗴 𝗟𝗶ê𝗻 𝗛ệ 𝝖𝗱𝗺𝐢𝗻!\n☫--------------☫\n𝝢𝗮𝗺𝗲 𝗕𝗼𝘁:『 & 』⪼ 𝐁𝐨𝐭 𝐌𝐢𝐧𝐧  `, attachment: fs.createReadStream(__dirname + "/cache/leaveGif/h.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s || (dddd)");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `join.mp4`);

				var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
		const userName = event.logMessageData.addedParticipants[id].fullName;    iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
				nameArray.push(userName);
				mentions.push({ tag: userName, id: event.senderID });
				memLength.push(participantIDs.length - i++);
        console.log(userName)
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "" : msg = threadData.customJoin;
      var getData = await Users.getData(event.author)
var nameAuthor = typeof getData.name == "undefined" ? "Người dùng tự vào" : getData.name
			msg = msg
         .replace(/\{iduser}/g, iduser.join(', '))
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝗰𝗮́𝗰 𝗯𝗮̣𝗻': '𝗯𝗮̣𝗻')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
         .replace(/\{author}/g, nameAuthor)
         .replace(/\{idauthor}/g, event.author)
			.replace(/\{threadName}/g, threadName)
      .replace(/\{session}/g, hours <= 10 ? "𝘀𝗮́𝗻𝗴" : 
    hours > 10 && hours <= 12 ? "𝘁𝗿𝘂̛𝗮" :
    hours > 12 && hours <= 18 ? "𝗰𝗵𝗶𝗲̂̀𝘂" : "𝘁𝗼̂́𝗶 ")
    .replace(/\{time}/g, time);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage({body: msg,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apivip.nvt20011.repl.co/image/vdnaruto')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
		} catch (e) { return console.log(e) };
	}
        }