const axios = require('axios');
const moment = require('moment-timezone');
module.exports.config = {
  name: "listban",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ManhG",
  description: "Xem danh sách ban của nhóm hoặc của người dùng",
  commandCategory: "Hệ Thống",
  usages: "[thread/user]",
  cooldowns: 5
};
module.exports.handleReply = async function ({ api, args, Users, handleReply, event, Threads }) {
  const { threadID, messageID } = event;
  let name = await Users.getNameUser(event.senderID);
  if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;

  switch (handleReply.type) {
    case "unbanthread":
      {
        var arrnum = event.body.split(" ");
        var msg = "";
        var uidS = "";
        var strS = "";
        var modules = "👾------ 𝐔𝐧𝐛𝐚𝐧 ------👾\n"
        var nums = arrnum.map(n => parseInt(n));
        for (let num of nums) {
          var myString = handleReply.listBanned[num - 1];
          var str = myString.slice(3);
          let uidK = myString.split(":");
          const uid = (uidK[uidK.length - 1]).trim();

          const data = (await Threads.getData(uid)).data || {};
          data.banned = 0;
          data.reason = null;
          data.dateAdded = null;
          await Threads.setData(uid, { data });
          var typef = global.data.threadBanned.delete(uid, 1);
          msg += typef + ' ' + myString + "\n";
          uidS += ' ' + uid + "\n";
          strS += ' ' + str + "\n";
        }
        //console.log(modules, msg);
        api.sendMessage({body:`[💝] → 𝐓𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 𝐭𝐮̛̀ 𝐀𝐝𝐦𝐢𝐧 ${name}\n[🥑] → 𝐍𝐡𝐨́𝐦 ${strS}\n[🫐] → 𝐕𝐮̛̀𝐚 𝐡𝐮̛𝐨̛̉𝐧𝐠 𝐚̂𝐧 𝐱𝐚́ 𝐠𝐨̛̃ 𝐛𝐚𝐧 𝐜𝐮̉𝐚 𝐚𝐝𝐦𝐢𝐧\n[🫒] → 𝐂𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐧𝐠𝐚𝐲 𝐛𝐚̂𝐲 𝐠𝐢𝐨̛̀`,attachment: (await axios.get((await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`)).data.url, {
                    responseType: 'stream'
                })).data
}, event.threadID, () =>
          api.sendMessage(`${global.data.botID}`, () =>
            api.sendMessage(`==== [ 𝐓𝐡𝐮̛̣𝐜 𝐭𝐡𝐢 𝐔𝐧𝐛𝐚𝐧 : 𝐭𝐫𝐮𝐞/𝐟𝐚𝐥𝐬𝐞 ] ====\n━━━━━━━━━━━━━━━━\n[💕] → ${msg}`, event.threadID, () =>
              api.unsendMessage(handleReply.messageID))));
      }
      break;

    case 'unbanuser':
      {
        var arrnum = event.body.split(" ");
        var msg = "";
        var uidS = "";
        var strS = "";
        var modules = "👾------ 𝐔𝐧𝐛𝐚𝐧 ------👾\n"
        var nums = arrnum.map(n => parseInt(n));

        for (let num of nums) {
          var myString = handleReply.listBanned[num - 1];
          var str = myString.slice(3);
          let uidK = myString.split(":");
          const uid = (uidK[uidK.length - 1]).trim();

          const data = (await Users.getData(uid)).data || {};
          data.banned = 0;
          data.reason = null;
          data.dateAdded = null;
          await Users.setData(uid, { data });
          var typef = global.data.userBanned.delete(uid, 1);
          msg += typef + ' ' + myString + "\n";
          uidS += ' ' + uid + "\n";
          strS += ' ' + str + "\n";

        }
        //console.log(modules, msg);
        //api.sendMessage(`»Thông báo từ Admin ${name}«\n\n ${strS} \n\nBạn Đã Được Gỡ Ban để có thể tiếp tục sử dụng bot`, uidS, () =>
        // api.sendMessage(`${global.data.botID}`, () =>
        api.sendMessage({body:`==== [ 𝐓𝐡𝐮̛̣𝐜 𝐭𝐡𝐢 𝐔𝐧𝐛𝐚𝐧 : 𝐭𝐫𝐮𝐞/𝐟𝐚𝐥𝐬𝐞 ] ====\n━━━━━━━━━━━━━━━━\n[💕] → ${msg}`,attachment: (await axios.get((await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`)).data.url, {
                    responseType: 'stream'
                })).data
}, event.threadID, () =>
          api.unsendMessage(handleReply.messageID));
      }
      break;
  }
};

module.exports.run = async function ({ event, api, Users, args, Threads }) {
  const { threadID, messageID } = event;
  var listBanned = [], listbanViews = [];
  i = 1, j = 1;
  var dataThread = [];
  //var nameThread = [];
  switch (args[0]) {
    case "thread":
    case "t":
    case "-t":
      {
        const threadBanned = global.data.threadBanned.keys();
        //console.log(threadBanned)
        for (const singleThread of threadBanned) {
          const nameT = await global.data.threadInfo.get(singleThread).threadName || "Tên không tồn tại";
          const reason = await global.data.threadBanned.get(singleThread).reason;
          const date = await global.data.threadBanned.get(singleThread).dateAdded;
          //const data = (await api.getThreadInfo(singleThread));
          //const nameT = data.name;
          var modules = "ThreadBan: "
          //console.log(modules, nameT)
          listBanned.push(`${i++}. ${nameT}\n[🔰] → 𝗧𝗜𝗗 : ${singleThread}`);
          
          listbanViews.push(`${j++}. ${nameT}\n[🔰] → 𝗧𝗜𝗗 : ${singleThread}\n[📋] → 𝗟𝘆́ 𝗱𝗼 : ${reason}\n[⏱] → 𝗧𝗶𝗺𝗲 : ${date}`);
          
        };

        return api.sendMessage(listbanViews.length != 0 ? api.sendMessage({body:`==== [ 𝗗𝗮𝗻𝗵 𝗦𝗮́𝗰𝗵 𝗡𝗵𝗼́𝗺 𝗕𝗶̣ 𝗕𝗮𝗻 ] ====\n━━━━━━━━━━━━━━━━━━\n[🎀] → 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐠𝐨̂̀𝐦 𝐜𝐨́ ${listbanViews.length} 𝐧𝐡𝐨́𝐦 𝐛𝐢̣ 𝐛𝐚𝐧\n━━━━━━━━━━━━━━━━━━\n${listbanViews.join("\n━━━━━━━━━━━━━━━━━━\n")}` +
          "\n━━━━━━━━━━━━━━━━━━\n[🥑] → 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 + 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣, 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐫𝐞𝐩 𝐧𝐡𝐢𝐞̂̀𝐮 𝐬𝐨̂́, 𝐜𝐚́𝐜𝐡 𝐧𝐡𝐚𝐮 𝐛𝐚̆̀𝐧𝐠 𝐝𝐚̂́𝐮 𝐜𝐚́𝐜𝐡 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐮𝐧𝐛𝐚𝐧 𝐭𝐡𝐫𝐞𝐚𝐝 𝐭𝐮̛𝐨̛𝐧𝐠 𝐮̛́𝐧𝐠",attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://obito.tiennguyen166.repl.co/images/loli')).data.url,
method: "GET",
responseType: "stream"
})).data
 },event.threadID
          , (error, info) => {
            client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              type: 'unbanthread',
              listBanned
            });
          },
          messageID
        ) : {body: "[😻] → 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐧𝐡𝐨́𝐦 𝐧𝐚̀𝐨 𝐛𝐢̣ 𝐛𝐚𝐧",attachment: (await axios.get((await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`)).data.url, {
                    responseType: 'stream'
                })).data
}, event.threadID, threadID, messageID);
      }
    case "user":
    case "u":
    case "-u":
      {
        const userBanned = global.data.userBanned.keys();
        //console.log(userBanned)
        var modules = "UserBan: "
        for (const singleUser of userBanned) {
          const name = global.data.userName.get(singleUser) || await Users.getNameUser(singleUser);

          const reason = await global.data.userBanned.get(singleUser).reason;
          const date = await global.data.userBanned.get(singleUser).dateAdded;

          listbanViews.push(`${i++}. ${name} \n[🔰] → 𝗨𝗜𝗗 : ${singleUser}\n[📋] → 𝗟𝘆́ 𝗱𝗼: ${reason}\n[⏱] → 𝗧𝗶𝗺𝗲: ${date}`);

          listBanned.push(`${j++}. ${name} \n[🔰] → 𝗨𝗜𝗗: ${singleUser}`);
          
          //console.log(modules, name)
          const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
                 var tinhtrang = xuly < 10 ? "Mượt":
                 xuly > 10 && xuly < 100 ? "Ổn Định" :
                 "Deplay";
  const aa = await axios.get(`https://apivip.nvt20011.repl.co/thinh`); 
   var thinh = aa.data.url;
              const time = process.uptime(),
                anh = Math.floor(time / (60 * 60)),
                la = Math.floor((time % (60 * 60)) / 60),
                mdonq = Math.floor(time % 60);
                 var image = [], stt = ["1","2","3","4","5","6"], srd = stt[Math.floor(Math.random() * stt.length)]
                 for (i = 0; i < srd; i++) {
                 var stream = (await axios.get((await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`)).data.url,  {
                 responseType: 'stream' })).data
                 image.push(stream)
                 }
        return api.sendMessage(listbanViews.length != 0 ? api.sendMessage({body:`==== [ 𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐔𝐬𝐞𝐫 𝐁𝐢̣ 𝐁𝐚𝐧 ] ====\n━━━━━━━━━━━━━━━━━━\n[🍁] → 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐠𝐨̂̀𝐦 𝐜𝐨́ ${listbanViews.length} 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗯𝗶̣ 𝗯𝗮𝗻\n━━━━━━━━━━━━━━━━━━\n${listbanViews.join("\n━━━━━━━━━━━━━━━━━━\n")}` +
          "\n━━━━━━━━━━━━━━━━━━\n[🥑] → 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 + 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣, 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐫𝐞𝐩 𝐧𝐡𝐢𝐞̂̀𝐮 𝐬𝐨̂́, 𝐜𝐚́𝐜𝐡 𝐧𝐡𝐚𝐮 𝐛𝐚̆̀𝐧𝐠 𝐝𝐚̂́𝐮 𝐜𝐚́𝐜𝐡 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐮𝐧𝐛𝐚𝐧 𝐭𝐡𝐫𝐞𝐚𝐝 𝐭𝐮̛𝐨̛𝐧𝐠 𝐮̛́𝐧𝐠\n━━━━━━━━━━━━━━━━━━\n[⏳] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗼𝗻𝗹: ${anh} 𝗴𝗶𝗼̛̀ ${la} 𝗽𝗵𝘂́𝘁 ${mdonq} 𝗴𝗶𝗮̂𝘆\n[🍒] → 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${xuly} 𝗴𝗶𝗮̂𝘆\n[☁️] → 𝗧𝗵𝗶́𝗻𝗵 : ${thinh}",attachment: image},event.threadID, (error, info) => {
            global.client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              type: 'unbanuser',
              listBanned
            });
          },
          messageID
        ) : {body: "[😻] → 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗯𝗶̣ 𝗯𝗮𝗻",attachment: (await axios.get((await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`)).data.url, {
                    responseType: 'stream'
                })).data
}, event.threadID, threadID, messageID);
      }

    default:
      {
        return global.utils.throwError(this.config.name, threadID, messageID);
      }
  }
      }