module.exports.config = {
    name: 'listbox',
    version: '1.0.0',
    credits: 'ManhG',
    hasPermssion: 2,
    description: '[Ban/Unban/Remove] List thread bot đã tham gia',
    commandCategory: 'Hệ Thống',
    usages: '[số trang/all]',
    cooldowns: 5
};

module.exports.handleReply = async function({ api, event, Users, args, Threads, handleReply }) {
    const { threadID, messageID } = event;
    if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;
    const name = await Users.getNameUser(event.senderID)
    let uid = event.senderID;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss || L");
    var arg = event.body.split(" ");
    //var idgr = handleReply.groupid[arg[1] - 1];
    //var groupName = handleReply.groupName[arg[1] - 1];
    switch (handleReply.type) {
        case "reply":
            {
                if (arg[0] == "ban" || arg[0] == "Ban") {
                    var arrnum = event.body.split(" ");
                    var msg = "";
                    var modules = "[ 𝐌𝐎𝐃𝐄 ] - 𝗧𝗵𝘂̛̣𝗰 𝘁𝗵𝗶 𝗯𝗮𝗻 «\n"
                    var nums = arrnum.map(n => parseInt(n));
                    nums.shift();
                    for (let num of nums) {
                        var idgr = handleReply.groupid[num - 1];
                        var groupName = handleReply.groupName[num - 1];

                        const data = (await Threads.getData(idgr)).data || {};
                        data.banned = true;
                        data.dateAdded = time;
                        var typef = await Threads.setData(idgr, { data });
                        global.data.threadBanned.set(idgr, { dateAdded: data.dateAdded });
                        msg += typef + ' ' + groupName + '\n[🍅] → 𝗧𝗜𝗗 : ' + idgr + "";
                        console.log(modules, msg)
                    }
                    api.sendMessage(`===== [ 𝗕𝗔𝗡 𝗡𝗛𝗢́𝗠 ] =====\n━━━━━━━━━━━━━━━━━━\n[🎀] → 𝗧𝗼̛́ 𝗻𝗵𝗮̣̂𝗻 𝗹𝗲̣̂𝗻𝗵 𝘁𝘂̛̀ 𝗮𝗱𝗺𝗶𝗻, 𝗬𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗰𝗮̂́𝗺 𝗻𝗵𝗼́𝗺.\n[💘] → 𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮𝗱𝗺𝗶𝗻 Đ𝗲̂̉ Đ𝘂̛𝗼̛̣𝗰 𝗴𝗼̛̃ 𝗯𝗮𝗻\n[🌐] → 𝗳𝗯 𝗮𝗱𝗺𝗶𝗻: https://www.facebook.com/profile.php?id=100081797352234`, idgr, () =>
                        api.sendMessage(`${global.data.botID}`, () =>
                            api.sendMessage(`===== [ 𝗕𝗔𝗡 𝗡𝗛𝗢́𝗠 ] =====\n[🥕] → [ 𝐌𝐎𝐃𝐄 ] - 𝗧𝗵𝘂̛̣𝗰 𝘁𝗵𝗶 𝗯𝗮𝗻: (true/false)\n[🔰] → 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐁𝐚𝐧 : ${name}\n━━━━━━━━━━━━━━━━━━\n[🍳] → ${msg}\n━━━━━━━━━━━━━━━━━━\n[🕰] → 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀ : ${time}`,threadID, () =>
                                api.unsendMessage(handleReply.messageID))));
                    break;
                }

                if (arg[0] == "unban" || arg[0] == "Unban" || arg[0] == "ub" || arg[0] == "Ub") {
                    var arrnum = event.body.split(" ");
                    var msg = "";
                    var modules = "[ 𝐌𝐎𝐃𝐄 ] - 𝗧𝗵𝘂̛̣𝗰 𝘁𝗵𝗶 𝘂𝗻𝗯𝗮𝗻\n"
                    var nums = arrnum.map(n => parseInt(n));
                    nums.shift();
                    for (let num of nums) {
                        var idgr = handleReply.groupid[num - 1];
                        var groupName = handleReply.groupName[num - 1];

                        const data = (await Threads.getData(idgr)).data || {};
                        data.banned = false;
                        data.dateAdded = null;
                        var typef = await Threads.setData(idgr, { data });
                        global.data.threadBanned.delete(idgr, 1);
                        msg += typef + ' ' + groupName + '\n[🍅] → 𝗧𝗜𝗗 : ' + idgr + "";
                        console.log(modules, msg)
                    }
                    api.sendMessage(`==== [ 𝗨𝗡𝗕𝗔𝗡 ] ====\n━━━━━━━━━━━━━━━━━━\n[🎀] → 𝗡𝗵𝗼́𝗺 𝗕𝗮̣𝗻 Đ𝗮̃ Đ𝘂̛𝗼̛̣𝗰 𝗚𝗼̛̃ 𝗕𝗮𝗻\n[🎊] → 𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁 𝘃𝘃`, idgr, () =>
                        api.sendMessage(`${global.data.botID}`, () =>
                            api.sendMessage(`==== [ 𝗨𝗡𝗕𝗔𝗡 ] ====\n━━━━━━━━━━━━━━━━━━\n[🥦] → [ 𝐌𝐎𝐃𝐄 ] - 𝗧𝗵𝘂̛̣𝗰 𝘁𝗵𝗶 𝘂𝗻𝗯𝗮𝗻 : (true/false)\n[🔰] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗚𝗼̛̃ : ${name}\n━━━━━━━━━━━━━━━━━━\n[🍳] → ${msg}\n━━━━━━━━━━━━━━━━━━\n[🕰] → 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀ : ${time}`, threadID, () =>
                                api.unsendMessage(handleReply.messageID))));
                    break;
                }

                if (arg[0] == "out" || arg[0] == "Out") {
                    var arrnum = event.body.split(" ");
                    var msg = "";
                    var modules = "[ 𝐌𝐎𝐃𝐄 ] - 𝗧𝗵𝘂̛̣𝗰 𝘁𝗵𝗶 𝗢𝘂𝘁\n"
                    var nums = arrnum.map(n => parseInt(n));
                    nums.shift();
                    for (let num of nums) {
                        var idgr = handleReply.groupid[num - 1];
                        var groupName = handleReply.groupName[num - 1];
                        var typef = api.removeUserFromGroup(`${api.getCurrentUserID()}`, idgr);
                        msg += typef + ' ' + groupName + '\n[🧀] → TID : ' + idgr + "";
                        console.log(modules, msg)
                    }
                    api.sendMessage(`==== [ 𝗹𝗲𝗮𝘃𝗲 𝘁𝗵𝗲 𝗴𝗿𝗼𝘂𝗽 ] ====\n━━━━━━━━━━━━━━━━━━\n[🎊] → 𝗧𝗼̛́ 𝗻𝗵𝗮̣̂𝗻 𝗹𝗲̣̂𝗻𝗵 𝘁𝘂̛̀ 𝗮𝗱𝗺𝗶𝗻\n[💞] → 𝗧𝗼̛́ 𝗼𝘂𝘁 𝗻𝗵𝗮 𝗣𝗽\n[🌹] → 𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮𝗱𝗺𝗶𝗻 Đ𝗲̂̉ Đ𝘂̛𝗼̛̣𝗰 𝗺𝘂̛𝗼̛̣𝗻 𝗯𝗼𝘁 𝗹𝗮̣𝗶\n[🌐] → 𝗳𝗯 𝗮𝗱𝗺𝗶𝗻: https://www.facebook.com/profile.php?id=100081797352234`, idgr, () =>
                        api.sendMessage(`${global.data.botID}`, () =>
                            api.sendMessage(`[🧀] → [ 𝐌𝐎𝐃𝐄 ] - 𝘁𝗵𝘂̛̣𝗰 𝘁𝗵𝗶 𝗼𝘂𝘁\n(true/false)\n\n${msg} `, threadID, () =>
                                api.unsendMessage(handleReply.messageID))));
                    break;
                }
            }
    }
};
module.exports.run = async function({ api, event, args,Users, }) {
  const name = await Users.getNameUser(event.senderID)
    let uid = event.senderID;
  const time = process.uptime();
		 var anh = Math.floor(time / (60 * 60));
		var la = Math.floor((time % (60 * 60)) / 60);
	var vtan = Math.floor(time % 60);
  const tvt = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss || DD/MM/YYYY");
  const fs = require('fs-extra')
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
  
  const permission = ["100050999371837",""];
	if (!permission.includes(event.senderID)) return api.sendMessage({body:`🍒 ==== [ 𝗟𝗜𝗦𝗧𝗕𝗢𝗫 ] ==== 🍒\n━━━━━━━━━━━━━━━━━━\n[🧀] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗗𝘂̀𝗻𝗴 : ${name}\n[🥨] → 𝗠𝘂𝗼̂́𝗻 𝗗𝘂̀𝗻𝗴 𝗧𝗵𝗶̀ 𝗠𝘂𝗮 𝗙𝗶𝗹𝗲\n[🌐] → 𝗟𝗶𝗻𝗸 𝗔𝗱𝗺𝗶𝗻 : https://www.facebook.com/tony.derby.773\n━━━━━━━━━━━━━━━━━━\n𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀ : ${tvt}\n𝗧𝗵𝗼̛̀𝗶 𝗚𝗶𝗮𝗻 𝗢𝗻𝗹 : ${anh} : ${la} : ${vtan}`, attachment: imgurl}, event.threadID, event.messageID);  
    switch (args[0]) {
        case "all":
            {
                var inbox = await api.getThreadList(100, null, ['INBOX']);
                let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
                var listthread = [];
                var listbox = [];
                /////////
                for (var groupInfo of list) {
                    //let data = (await api.getThreadInfo(groupInfo.threadID));
                    //const listUserID = event.participantIDs.filter(ID => ID);
                    listthread.push({
                        id: groupInfo.threadID,
                        name: groupInfo.name || "Chưa đặt tên",
                        participants: groupInfo.participants.length
                    });
                }
                /////////
                var listbox = listthread.sort((a, b) => {
                    if (a.participants > b.participants) return -1;
                    if (a.participants < b.participants) return 1;
                });
                /////////  
                var groupid = [];
                var groupName = [];
                var page = 1;
                page = parseInt(args[0]) || 1;
                page < -1 ? page = 1 : "";
                var limit = 100000;
                var msg = "====『 𝗟𝗜𝗦𝗧 𝗡𝗛𝗢́𝗠 』====\n━━━━━━━━━━━━━━━━━━\n";
                var numPage = Math.ceil(listbox.length / limit);

                for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
                    if (i >= listbox.length) break;
                    let group = listbox[i];
                    msg += `━━━━━━━━━━━━━━━━━━\n${i + 1}. ${group.name}\n[💌] → 𝗧𝗜𝗗 : ${group.id}\n[👤] → 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 : ${group.participants}\n\n`;
                    groupid.push(group.id);
                    groupName.push(group.name);
                }
                msg += `\n[📖] → 𝗧𝗿𝗮𝗻𝗴 ${page}/${numPage}\n𝗗𝘂̀𝗻𝗴 ${global.config.PREFIX}𝗹𝗶𝘀𝘁𝗯𝗼𝘅 + 𝘀𝗼̂́ 𝘁𝗿𝗮𝗻𝗴/𝗮𝗹𝗹\n\n`

                api.sendMessage({body: msg + "━━━━━━━━━━━━━━━━━━\n[🧀] → 𝗥𝗲𝗽𝗹𝘆 𝗢𝘂𝘁 , 𝗕𝗮𝗻 , 𝗨𝗻𝗯𝗮𝗻 + 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣, \n[🍞] → 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗿𝗲𝗽 𝗻𝗵𝗶𝗲̂̀𝘂 𝘀𝗼̂́, 𝗰𝗮́𝗰𝗵 𝗻𝗵𝗮𝘂 𝗯𝗮̆̀𝗻𝗴 𝗱𝗮̂́𝘂 𝗰𝗮́𝗰𝗵 đ𝗲̂̉ 𝗢𝘂𝘁, 𝗕𝗮𝗻, 𝗨𝗻𝗯𝗮𝗻 𝘁𝗵𝗿𝗲𝗮𝗱 đ𝗼́ 🤍",attachment: imgurl}, event.threadID, (e, data) =>
                    global.client.handleReply.push({
                        name: this.config.name,
                        author: event.senderID,
                        messageID: data.messageID,
                        groupid,
                        groupName,
                        type: 'reply'
                    })
                )
            }
            break;

        default:
            try {
                var inbox = await api.getThreadList(100, null, ['INBOX']);
                let list = [...inbox].filter(group =>  group.isSubscribed && group.isGroup);
                var listthread = [];
                var listbox = [];
                /////////
                for (var groupInfo of list) {
                    //let data = (await api.getThreadInfo(groupInfo.threadID));
                    //const listUserID = event.participantIDs.filter(ID => ID);
                    listthread.push({
                        id: groupInfo.threadID,
                        name: groupInfo.name || "Chưa đặt tên",
messageCount: groupInfo.messageCount,
                        participants: groupInfo.participants.length
                    });

                } //for
                var listbox = listthread.sort((a, b) => {
                    if (a.participants > b.participants) return -1;
                    if (a.participants < b.participants) return 1;
                });
                var groupid = [];
                var groupName = [];
                var page = 1;
                page = parseInt(args[0]) || 1;
                page < -1 ? page = 1 : "";
                var limit = 100;
                var msg = "=====『 𝗟𝗜𝗦𝗧 𝗡𝗛𝗢́𝗠 』=====\n";
                var numPage = Math.ceil(listbox.length / limit);

                for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
                    if (i >= listbox.length) break;
                    let group = listbox[i];
                    msg += `━━━━━━━━━━━━━━━━━━\n${i + 1}. ${group.name}\n[🔰] → 𝗧𝗜𝗗 : ${group.id}\n[👤] → 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 : ${group.participants}\n[💬] → 𝗧𝗼̂̉𝗻𝗴 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${group.messageCount}\n`;
                    groupid.push(group.id);
                    groupName.push(group.name);
                }
                msg += `\n[📖] → 𝗧𝗿𝗮𝗻𝗴 ${page}/${numPage}\𝗗𝘂̀𝗻𝗴 ${global.config.PREFIX}𝗹𝗶𝘀𝘁𝗯𝗼𝘅 + 𝘀𝗼̂́ 𝘁𝗿𝗮𝗻𝗴/𝗮𝗹𝗹\n`

                api.sendMessage({body: msg + "━━━━━━━━━━━━━━━━━━\n[🧀] → 𝗥𝗲𝗽𝗹𝘆 𝗢𝘂𝘁 , 𝗕𝗮𝗻 , 𝗨𝗻𝗯𝗮𝗻 + 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣, \n[🍞] → 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗿𝗲𝗽 𝗻𝗵𝗶𝗲̂̀𝘂 𝘀𝗼̂́, 𝗰𝗮́𝗰𝗵 𝗻𝗵𝗮𝘂 𝗯𝗮̆̀𝗻𝗴 𝗱𝗮̂́𝘂 𝗰𝗮́𝗰𝗵 đ𝗲̂̉ 𝗢𝘂𝘁, 𝗕𝗮𝗻, 𝗨𝗻𝗯𝗮𝗻 𝘁𝗵𝗿𝗲𝗮𝗱 đ𝗼́ 🌹",attachment: imgurl}, event.threadID, (e, data) =>
                    global.client.handleReply.push({
                        name: this.config.name,
                        author: event.senderID,
                        messageID: data.messageID,
                        groupid,
                        groupName,
                        type: 'reply'
                    })
                )
            } catch (e) {
                return console.log(e)
            }
    }
};