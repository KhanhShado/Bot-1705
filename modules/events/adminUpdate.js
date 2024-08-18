module.exports.config = {
	name: "adminUpdate",
	eventType: ["log:thread-admins","log:thread-name", "log:user-nickname","log:thread-icon","log:thread-color"],
	version: "1.5.5",
	credits: "Nam",
	description: "Cáº­p nháº­t thĂ´ng tin nhĂ³m má»™t cĂ¡ch nhanh chĂ³ng",
    envConfig: {
        autoUnsend: true,
        sendNoti: true,
        timeToUnsend: 10
    }
};

module.exports.run = async function ({ event, api, Threads,Users }) {
	const fs = require("fs");
	var iconPath = __dirname + "/adminUpdate/emoji.json";
  var namePath = __dirname + "/adminUpdate/namebox.json";
  var bietdanhPath = __dirname + "/adminUpdate/bietdanh.json";
  var chudePath = __dirname + "/adminUpdate/chude.json";
	if (!fs.existsSync(iconPath)) fs.writeFileSync(iconPath, JSON.stringify({}));
  if (!fs.existsSync(namePath)) fs.writeFileSync(namePath, JSON.stringify({}));
  if (!fs.existsSync(bietdanhPath)) fs.writeFileSync(bietdanhPath, JSON.stringify({}));
  if (!fs.existsSync(chudePath)) fs.writeFileSync(chudePath, JSON.stringify({}));

  const moment = require("moment-timezone");
  var tg = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var ngay = moment.tz('Asia/Ho_Chi_Minh').format('D/MM/YYYY');
  var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chá»§ Nháº­t'
  if (thu == 'Monday') thu = 'Thá»© Hai'
  if (thu == 'Tuesday') thu = 'Thá»© Ba'
  if (thu == 'Wednesday') thu = 'Thá»© TÆ°'
  if (thu == "Thursday") thu = 'Thá»© NÄƒm'
  if (thu == 'Friday') thu = 'Thá»© SĂ¡u'
  if (thu == 'Saturday') thu = 'Thá»© Báº£y'
  const timeStart = Date.now();
      const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
    const { threadID, logMessageType, logMessageData } = event;
    const { setData, getData } = Threads;

    const thread = global.data.threadData.get(threadID) || {};
    if (typeof thread["adminUpdate"] != "undefined" && thread["adminUpdate"] == false) return;

    try {
        let dataThread = (await getData(threadID)).threadInfo;
        switch (logMessageType) {
            case "log:thread-admins": {
                 if (logMessageData.ADMIN_EVENT == "add_admin") {
                    dataThread.adminIDs.push({ id: logMessageData.TARGET_ID })
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`=====ă€ đ—đ—¥đ—¢đ—¨đ—£ đ—¨đ—£đ——đ—”đ—§đ—˜ ă€=====\n\nâ—†â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â—†\n\n${event.logMessageBody}\nâ¢ Chá»©c vá»¥ cÅ©: ThĂ nh ViĂªn\n\n====ă€ ${tg} ă€====\nđ™‘đ™–̀€đ™¤ đ™¡đ™ª̀đ™˜: ${gio}âŒ\n hĂ´m nay ngĂ y: ${ngay}đŸŒ\n hĂ´m nay lĂ : ${thu}â˜˜ï¸\n[🚀] → 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝐠𝐢𝐚̂𝐲\n[⏳] → 𝗕𝗼𝘁 𝗢𝗻𝗹𝗶𝗻𝗲: ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲`, threadID);
                }
                else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`=====ă€ đ—đ—¥đ—¢đ—¨đ—£ đ—¨đ—£đ——đ—”đ—§đ—˜ ă€=====\n\nâ—†â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â—†\n\n${event.logMessageBody}\nâ¢ Chá»©c vá»¥ cÅ©: Quáº£n Trá»‹ ViĂªn\n\n====ă€ ${tg} ă€====\nđ™‘đ™–̀€đ™¤ đ™¡đ™ª̀đ™˜: ${gio}âŒ\n hĂ´m nay ngĂ y: ${ngay}đŸŒ\n hĂ´m nay lĂ : ${thu}â˜˜ï¸\n[🚀] → 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝐠𝐢𝐚̂𝐲\n[⏳] → 𝗕𝗼𝘁 𝗢𝗻𝗹𝗶𝗻𝗲: ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲`, threadID, async (error, info) => {
                	preIcon[threadID] = dataThread.threadIcon;
                	fs.writeFileSync(iconPath, JSON.stringify(preIcon));
                    });
                }
                break;
            }

            case "log:user-nickname": {
                let preBietdanh = JSON.parse(fs.readFileSync(bietdanhPath));           dataThread.nicknames[logMessageData.participant_id] = logMessageData.nickname;
                if (typeof global.configModule["nickname"] != "undefined" && !global.configModule["nickname"].allowChange.includes(threadID) && !dataThread.adminIDs.some(item => item.id == event.author) || event.author == api.getCurrentUserID()) return;
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`=====ă€ đ—đ—¥đ—¢đ—¨đ—£ đ—¨đ—£đ——đ—”đ—§đ—˜ ă€=====\n\nâ—†â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â—†\n\n${event.logMessageBody}\nâ¢ Biá»‡t danh cÅ©: ${preBietdanh[logMessageData.participant_id+threadID] || await Users.getNameUser(logMessageData.participant_id)}\n\n====ă€ ${tg} ă€====\nđ™‘đ™–̀€đ™¤ đ™¡đ™ª̀đ™˜: ${gio}âŒ\n hĂ´m nay ngĂ y: ${ngay}đŸŒ\n hĂ´m nay lĂ : ${thu}â˜˜ï¸\n[🚀] → 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝐠𝐢𝐚̂𝐲\n[⏳] → 𝗕𝗼𝘁 𝗢𝗻𝗹𝗶𝗻𝗲: ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲`, threadID, async (error, info) => {
                	preBietdanh[logMessageData.participant_id+threadID] = logMessageData.nickname;
                	fs.writeFileSync(bietdanhPath, JSON.stringify(preBietdanh));
                });
                break;
            }

            case "log:thread-name": {
              let preName = JSON.parse(fs.readFileSync(namePath));
                dataThread.threadName = event.logMessageData.name || "KhĂ´ng tĂªn";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`=====ă€ đ—đ—¥đ—¢đ—¨đ—£ đ—¨đ—£đ——đ—”đ—§đ—˜ ă€=====\n\nâ—†â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â—†\n\n${event.logMessageBody}\nâ¢ TĂªn cÅ©: ${preName[threadID] || "khĂ´ng rĂµ" || event.logMessageData.name || "KhĂ´ng tĂªn"}\n\n====ă€ ${tg} ă€====\đ™‘đ™–̀€đ™¤ đ™¡đ™ª̀đ™˜: ${gio}âŒ\n hĂ´m nay ngĂ y: ${ngay}đŸŒ\n hĂ´m nay lĂ : ${thu}â˜˜ï¸\n[🚀] → 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝐠𝐢𝐚̂𝐲\n[⏳] → 𝗕𝗼𝘁 𝗢𝗻𝗹𝗶𝗻𝗲: ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲`, threadID, async (error, info) => {
                	preName[threadID] = dataThread.threadName;
                	fs.writeFileSync(namePath, JSON.stringify(preName));
                });
                break;
            }

            case "log:thread-icon": {
            	let preIcon = JSON.parse(fs.readFileSync(iconPath));
            	dataThread.threadIcon = event.logMessageData.thread_icon || "đŸ‘";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`=====ă€ đ—đ—¥đ—¢đ—¨đ—£ đ—¨đ—£đ——đ—”đ—§đ—˜ ă€=====\n\nâ—†â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â—†\n\n${event.logMessageBody}\nâ¢ Lá»‹ch sá»­ icon: ${preIcon[threadID] || "khĂ´ng rĂµ"}\n\n====ă€ ${tg} ă€====\nđ™‘đ™–̀€đ™¤ đ™¡đ™ª̀đ™˜: ${gio}âŒ\n hĂ´m nay ngĂ y: ${ngay}đŸŒ\n hĂ´m nay lĂ : ${thu}â˜˜ï¸\n[🚀] → 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝐠𝐢𝐚̂𝐲\n[⏳] → 𝗕𝗼𝘁 𝗢𝗻𝗹𝗶𝗻𝗲: ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲`, threadID, async (error, info) => {
                	preIcon[threadID] = event.logMessageBody.replace(`Ä‘Ă£ Ä‘áº·t biá»ƒu tÆ°á»£ng cáº£m xĂºc thĂ nh`, "Ä‘áº·t icon lĂ  =>")               });
                break;
            }
             case "log:thread-color": {
let preChude = JSON.parse(fs.readFileSync(chudePath));
            	dataThread.threadColor = event.logMessageData.thread_color || "đŸŒ¤";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`=====ă€ đ—đ—¥đ—¢đ—¨đ—£ đ—¨đ—£đ——đ—”đ—§đ—˜ ă€=====\n\nâ—†â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â—†\n\n ${event.logMessageBody}\nâ¢ Lá»‹ch sá»­ color: ${preChude[threadID] || "khĂ´ng rĂµ"}\n\n====ă€ ${tg} ă€====\nđ™‘đ™–̀€đ™¤ đ™¡đ™ª̀đ™˜: ${gio}âŒ\n hĂ´m nay ngĂ y: ${ngay}đŸŒ\n hĂ´m nay lĂ : ${thu}â˜˜ï¸`, threadID, async (error, info) => {
                  preChude[threadID] = event.logMessageBody.replace(`Ä‘Ă£ thay Ä‘á»•i mĂ u sáº¯c chá»§ Ä‘á» cá»§a Ä‘oáº¡n chat thĂ nh\n[🚀] → 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝐠𝐢𝐚̂𝐲\n[⏳] → 𝗕𝗼𝘁 𝗢𝗻𝗹𝗶𝗻𝗲: ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲`, "Ä‘áº·t color lĂ  =>")
                	fs.writeFileSync(chudePath, JSON.stringify(preChude));
                });
                break;
            }
        }
        await setData(threadID, { threadInfo: dataThread });
    } catch (e) { console.log(e) };
                      }