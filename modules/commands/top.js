module.exports.config = {
	name: "top",
	version: "1.0.6",
	hasPermssion: 0,
	credits: "CatalizCS mod by MDong",
	description: "Xem các cấp độ của người dùng",
	commandCategory: "Nhóm",
	usages: "[thread/user/money/level]",
	cooldowns: 5
};

module.exports.run = async ({ event, api, args, Currencies, Users }) => {
    const { threadID, messageID } = event;
    const axios = require("axios");
    const moment = require('moment-timezone');
    var gio = moment.tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY || HH:mm:ss')
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
  
    const res = await axios.get(`https://apivip.nvt20011.repl.co/thinh`);
var thinh = res.data.url;
    const dong = await Users.getNameUser(event.senderID)
let uid = event.senderID;
	if (args[1] && isNaN(args[1]) || parseInt(args[1]) <= 0)
  return api.sendMessage("thông tin độ dài list phải là một con số và không dưới 0", event.threadID, event.messageID);
	var option = parseInt(args[1] || 10);
	var data, msg = "";
	var fs = require("fs-extra");
	var request = require("request");  // Covernt exp to level
    function expToLevel(point) {
	if (point < 0) return 0;
	return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
    }
    //level	
		if (args[0] == "level") { 
    let all = await Currencies.getAll(['userID', 'exp']);
				all.sort((a, b) => b.exp - a.exp);
				let num = 0;
	             /*let msg = {
					body: '🎴Top 15 người dùng có level cao nhất sever !',					
				}*/
				for (var i = 0; i < 10; i++) {		       	//thay vào số line cần check		 
					let level = expToLevel(all[i].exp);
					var _0xce87=["\x6E\x61\x6D\x65","\x75\x73\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var name=( await Users[_0xce87[2]](all[i][_0xce87[1]]))[_0xce87[0]]    
  
					num += 1;
					msg += '\n' + num + '. ' + name + ' - 𝐥𝐞𝐯𝐞𝐥 ' + level;}
					 //console.log(msg.body)
 		return api.sendMessage({body:`▭▭▭▭ [ 𝗧𝗢𝗣 𝗟𝗘𝗩𝗘𝗟 ] ▭▭▭▭\n𝗧𝗼𝗽 𝟭𝟬 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗰𝗼́ 𝗹𝗲𝘃𝗲𝗹 𝗰𝗮𝗼 𝗻𝗵𝗮̂́𝘁 𝘀𝗲𝘃𝗲𝗿!\n━━━━━━━━━━━━━━━━━━━\n${msg}\n━━━━━━━━━━━━━━━━━━━\n『👤』𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${dong}\n『💬』𝗧𝗵𝗶́𝗻𝗵: ${thinh}\n━━━━━━━━━━━━━━━━━━━\n⏰️=『${gio}』=⏰️`   /*api.sendMessage({body: msg*/, attachment: imgurl}, event.threadID, event.messageID)
		}
	if (args[0] == "thread") {
		var threadList = [];	
		try {
        	data = await api.getThreadList(option + 10, null, ["INBOX"]);
		}
		catch (e) {
			console.log(e);
		}
		for (const thread of data) {
			if (thread.isGroup == true) threadList.push({ threadName: thread.name, threadID: thread.threadID, messageCount: thread.messageCount });
		}		
		threadList.sort((a, b) => {
			if (a.messageCount > b.messageCount) return -1;
            if (a.messageCount < b.messageCount) return 1;
		})
		var i = 0;
		for(const dataThread of threadList) {
			if (i == option) break;
			msg += `${i+1}. ${(dataThread.threadName)||"Không tên"}\n🌸𝐓𝐈𝐃: [${dataThread.threadID}]\n🌸𝐒𝐨̂́ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧: ${dataThread.messageCount} 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧\n\n`;
			i+=1;
		}
		return api.sendMessage({body:`▭▭▭ [ 𝗧𝗢𝗣 𝗧𝗛𝗥𝗘𝗔𝗗 ] ▭▭▭\n𝗗𝘂̛𝗼̛́𝗶 đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗼𝗽 𝟭𝟬 𝗰𝗮́𝗰 𝗻𝗵𝗼́𝗺 𝗹𝗮̆́𝗺 𝗺𝗼̂̀𝗺 𝗻𝗵𝗮̂́𝘁 𝗾𝘂𝗮̉ đ𝗮̂́𝘁\n━━━━━━━━━━━━━━━━━━━\n${msg}\n━━━━━━━━━━━━━━━━━━━\n『👤』𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${dong}\n『💬』𝗧𝗵𝗶́𝗻𝗵: ${thinh}\n━━━━━━━━━━━━━━━━━━━\n⏰️=『${gio}』=⏰️`, attachment: imgurl}, threadID, messageID);
	}
	
 if (args[0] == "money") { 
    let all = await Currencies.getAll(['userID', 'money']);
				all.sort((a, b) => b.money - a.money);
				let num = 0;
	             /*let msg = {
					body: '💵 Sau đây là top 10 tỷ phú của sever !',
					
				}*/
				for (var i = 0; i < 10; i++) {               //thay vào số line cần check	
					let level = all[i].money;
          
					var _0x5873=["\x6E\x61\x6D\x65","\x75\x73\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var name=( await Users[_0x5873[2]](all[i][_0x5873[1]]))[_0x5873[0]]
                    
					num += 1;
					msg += '\n' + num + '. ' + name + ': ' + level + " đ𝐨̂";}
              //console.log(msg.body)
 		return api.sendMessage({body:`▭▭▭▭ [𝗧𝗢𝗣 𝗠𝗢𝗡𝗘𝗬 ] ▭▭▭▭\n𝗦𝗮𝘂 𝗱𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗼𝗽 𝟭𝟬 𝘁𝘆̉ 𝗽𝗵𝘂́ 𝗰𝘂̉𝗮 𝘀𝗲𝘃𝗲𝗿!\n━━━━━━━━━━━━━━━━━━━\n${msg}\n━━━━━━━━━━━━━━━━━━━\n『👤』𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${dong}\n『💬』𝗧𝗵𝗶́𝗻𝗵: ${thinh}\n━━━━━━━━━━━━━━━━━━━\n⏰️=『${gio}』=⏰️`, attachment: imgurl}, event.threadID, event.messageID)
		}
	   if (args[0] == "user") {
		var data, msg = "", i = 0;
		try {
			data = await Currencies.getAll(["userID","exp"]);
		}
		catch (e) {
			console.log(e);
		}
		data.sort((a, b) => {
			if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
		})
		if (data.length < option) option = data.length;
		const idBot = api.getCurrentUserID();
		data = data.filter(item => item.userID != idBot);
		for(const dataUser of data) {
			if (i == option) break;
			var _0xd0e1=["\x6E\x61\x6D\x65","\x75\x73\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var nameUser=( await Users[_0xd0e1[2]](dataUser[_0xd0e1[1]]))[_0xd0e1[0]]
			msg += `${i + 1}/ ${nameUser} 𝐯𝐨̛́𝐢 ${dataUser.exp} 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧\n`;
			i+=1;
		}
		return api.sendMessage({body:`▭▭▭▭ [ 𝗧𝗢𝗣 𝗨𝗦𝗘𝗥 ] ▭▭▭▭\n𝗗𝘂̛𝗼̛́𝗶 đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗼𝗽 ${option} 𝗰𝗮́𝗰 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗮̆́𝗺 𝗺𝗼̂̀𝗺 𝗻𝗵𝗮̂́𝘁 𝗾𝘂𝗮̉ đ𝗮̂́𝘁\n━━━━━━━━━━━━━━━━━━━\n${msg}\n━━━━━━━━━━━━━━━━━━━\n『👤』𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${dong}\n『💬』𝗧𝗵𝗶́𝗻𝗵: ${thinh}\n━━━━━━━━━━━━━━━━━━━\n⏰️=『${gio}』=⏰️`, attachment: imgurl}, threadID, messageID);
	}
}
