module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Mirai Team",//đã mod lại 
	description: "Admin Config",
	commandCategory: "Admin",
	usages: "",
    cooldowns: 0,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
      "vi": {
        "listAdmin": `ADMIN BOT
━━━━━━━━━━━━━━━━━━\n%1\n\nNDH\n━━━━━━━━━━━━━━━━━━\n\n%2`,
        "notHavePermssion": '[ 𝗠𝗢𝗗𝗘 ] → Bạn không đủ quyền hạn để có thể sử dụng chức năng "%1"',
        "addedNewAdmin": '💓=== [ 𝗔𝗗𝗠𝗜𝗡 𝗔𝗗𝗗 ] ===💓\n━━━━━━━━━━━━━━━━━━\n\n[🌟] → 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝘁𝗵𝗲̂𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝟭 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗿𝗼̛̉ 𝘁𝗵𝗮̀𝗻𝗵 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁\n━━━━━━━━━━━━━━━━━━\n[🧸] → 𝗧𝗲̂𝗻 , 𝘂𝗶𝗱 𝗰𝘂̉𝗮 𝗮𝗱𝗺𝗶𝗻 𝗺𝗼̛́𝗶: %2',
      "addedNewNDH": '[ 𝗠𝗢𝗗𝗘 ] → Đã thêm thành công %1 người dùng trở thành Người Hỗ Trợ\n\n%2',
        "removedAdmin": '[ 𝗠𝗢𝗗𝗘 ] → Đã gỡ thành công vai trò ADMIN BOT %1 người dùng trở lại làm thành viên\n\n%2',
      "removedNDH": '[ 𝗠𝗢𝗗𝗘 ] → Đã gỡ thành công vai trò Người Hỗ Trợ %1 người dùng trở lại làm thành viên\n\n%2'

    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
}
}
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
  const _0x3cf836=_0x5968;(function(_0x3e81f5,_0x212bb5){const _0x51beac=_0x5968,_0x33638b=_0x3e81f5();while(!![]){try{const _0x522f48=parseInt(_0x51beac(0x171))/0x1*(-parseInt(_0x51beac(0x16b))/0x2)+-parseInt(_0x51beac(0x16f))/0x3*(-parseInt(_0x51beac(0x16a))/0x4)+-parseInt(_0x51beac(0x172))/0x5+-parseInt(_0x51beac(0x169))/0x6*(-parseInt(_0x51beac(0x175))/0x7)+parseInt(_0x51beac(0x174))/0x8*(parseInt(_0x51beac(0x16e))/0x9)+-parseInt(_0x51beac(0x170))/0xa+parseInt(_0x51beac(0x173))/0xb;if(_0x522f48===_0x212bb5)break;else _0x33638b['push'](_0x33638b['shift']());}catch(_0x14b56f){_0x33638b['push'](_0x33638b['shift']());}}}(_0x2b90,0x34157));async function streamURL(_0x2c3d2c,_0x3f46d5=_0x3cf836(0x179)){const _0x801a36=_0x3cf836,_0x3e1ff3=__dirname+_0x801a36(0x177)+Date[_0x801a36(0x176)]()+'.'+_0x3f46d5,_0x2e2693=require(_0x801a36(0x16c)),_0x54304c=require(_0x801a36(0x178));return await _0x2e2693['image']({'url':_0x2c3d2c,'dest':_0x3e1ff3}),setTimeout(_0x462c18=>_0x54304c['unlinkSync'](_0x462c18),0x3c*0x3e8,_0x3e1ff3),_0x54304c[_0x801a36(0x16d)](_0x3e1ff3);}function _0x2b90(){const _0x47b1ea=['2522700jpcwdA','61382BpCDvK','1628865aZyjhs','4395556MIgADB','42664SWelQy','631323LQmsDY','now','/cache/','fs-extra','jpg','12vCqVFe','1219556zkqHoV','6VtHBEr','image-downloader','createReadStream','153gEcEte','3wbKsoq'];_0x2b90=function(){return _0x47b1ea;};return _0x2b90();}function _0x5968(_0x16a39a,_0x172ae1){const _0x2b905d=_0x2b90();return _0x5968=function(_0x5968ad,_0x1fcd72){_0x5968ad=_0x5968ad-0x169;let _0x45756b=_0x2b905d[_0x5968ad];return _0x45756b;},_0x5968(_0x16a39a,_0x172ae1);}
  const fs = require("fs");
  const axios = require("axios");
  const moment = require("moment-timezone");
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const name = await Users.getNameUser(event.senderID)
let uid = event.senderID;
    const res1 = await axios.get(`https://apivip.nvt20011.repl.co/image/loli`);
    const res2 = await axios.get(`https://apivip.nvt20011.repl.co/image/loli`);
var data1 = res1.data.url;
var array = [];
var data2 = res2.data.url;
var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
    array.push(downloadfile1);
    array.push(downloadfile2);
    const content = args.slice(1, args.length);
    if (args.length == 0) 
    return api.sendMessage({body: `==== [ 𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨 ] ====\n━━━━━━━━━━━━━━━━━━\n➞ admin add - Thêm 1 người dùng làm admin bot\n➞ admin addndh - Thêm 1 người dùng làm ndh\n➞ admin list - Xem danh sách các admin\n➞ admin rm - Xoá 1 admin làm thành viên nhóm\n➞ admin only - Bật/Tắt chế độ chỉ admin dùng được bot\n➞ admin ndhonly - Bật/Tắt chế độ chỉ ndh mới dùng được bot\n➞ admin qtvonly - Bật/Tắt chế độ chỉ quản trị viên nhóm dùng được bot\n━━━━━━━━━━━━━━━━━━\n𝗛𝗗𝗦𝗗 ➞ ${global.config.PREFIX}admin [MODE] 💓`, attachment: array}, 
 event.threadID, event.messageID); 
    const { threadID, messageID, mentions, senderID } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { NDH } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    switch (args[0]) {
        case "list": {
          var i = 1
        var msg = [];
          listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`➞ Name: ${name}\n➞ Link FB: https://www.facebook.com/profile.php?id=${idAdmin}\n`);
                }
            }
          var i = 1
        var msg1 = [];
          listNDH = NDH || config.NDH ||  [];
            var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`➞ Name: ${name1}\n➞ Link FB: https://www.facebook.com/profile.php?id=${idNDH}\n➞ Inbox: https://m.me/${idNDH}\n━━━━━━━━━━━━━━━━━━`);
                }
            }
var admin = `====『 Người Điều Hành 』====\n━━━━━━━━━━━━━━━━━━━━\n\n${msg1.join("\n")}\n\n======『 Admin Bot 』=====\n━━━━━━━━━━━━━━━━━━━━\n ${msg.join("\n\n")}`;
          var test = `\n━━━━━━━━━━━━━━━━━━━━\n〖⏰〗 Time: ${gio}\n〖👤〗 Owner: ${name}\n〖🌐〗 Link FB: https://www.facebook.com/profile.php?id=${uid}`;
return api.sendMessage({body: admin + test, attachment: array}, event.threadID, event.messageID); 
    }
        case "add": { 
            if (event.senderID != 100090458979503) return api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Cần quyền Admin để thực hiện lệnh`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`${id} - ${event.mentions[id]}`);
                };
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage({body: getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), attachment: await streamURL(`https://graph.facebook.com/${mention}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID)
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage({body: getText("addedNewAdmin", 1, `ADMIN BOT - ${name}`),attachment: await streamURL(`https://graph.facebook.com/${content[0]}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID)
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
        case "removeAdmin":
        case "rm":
        case "delete": {
            if (event.senderID != 100090458979503) return api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Cần quyền ADMIN để thực hiện lệnh`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "removeAdmin"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`${id} - ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `${content[0]} - ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
                                               }
        case 'qtvonly': {
       const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
          if (permssion < 1) return api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → Cần quyền Quản trị viên trở lên để thực hiện lệnh", threadID, messageID);
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → Tắt thành công chế độ Quản trị viên cho nhóm này, tất cả thành viên có thể sử dụng Bot", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → Kích hoạt thành công chế độ Quản trị viên cho nhóm này, chỉ Quản trị viên nhóm có thể sử dụng Bot", threadID, messageID);
    }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
        } 
        case 'only':
        case '-o': {
            //---> CODE ADMIN ONLY<---//
          if (event.senderID != 100090458979503) return api.sendMessage("[𝗠𝗢𝗗𝗘] - Cần quyền Admin để thực hiện ", threadID, messageID);
            if (config.adminOnly == false) {
                config.adminOnly = true;
                api.sendMessage(`[𝗠𝗢𝗗𝗘] - Kích hoạt chế độ vô cực thành công, chỉ Admin được sử dụng Bot`, threadID, messageID);
            } else {
                config.adminOnly = false;
                api.sendMessage(`[𝗠𝗢𝗗𝗘] - Tắt chế độ vô cực thành công, tất cả thành viên có thể sử dụng Bot`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
    }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
          }
    };
}
