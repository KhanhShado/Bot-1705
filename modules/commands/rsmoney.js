const axios = require('axios');
const moment = require('moment-timezone');
module.exports.config = {
  name: "rsmoney",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "manhG",
  description: "Reset số tiền của cả nhóm/all nhóm về 0",
  commandCategory: "Tiện ích",
  usages: "[cc], [del], [all]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies, args, Users }) => {
       const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
     var tinhtrang = xuly < 10 ? "Mượt":
     xuly > 10 && xuly < 100 ? "Ổn Định" :
     "Deplay";
    const res = await axios.get(`https://apivip.nvt20011.repl.co/thinh`); 
     var thinh = res.data.url;
     const name = await Users.getNameUser(event.senderID)
     let uid = event.senderID;
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
  switch (args[0]) {
    case 'all':
      {
        const allUserID = global.data.allUserID;
        for (const singleUser of allUserID) {
          var currenciesData = await Currencies.getData(singleUser)
          if (currenciesData != false) {
            var money = currenciesData.money;
            if (typeof money != "undefined") {
              money -= money;
              await Currencies.setData(singleUser, { money });
            }
          }
        }
api.sendMessage({body:`=== [ RESET MONEY ] ====\n━━━━━━━━━━━━━━━━━━\n[🍍] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 : ${name}\n[💕] → reset all tiền thành công\n[🕰] → 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀ : ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")}\n━━━━━━━━━━━━━━━━━━\n[⏳] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗼𝗻𝗹 : ${anh} 𝗴𝗶𝗼̛̀ ${la} 𝗽𝗵𝘂́𝘁 ${mdonq} 𝗴𝗶𝗮̂𝘆\n[🍒] → 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́ : ${xuly} 𝗴𝗶𝗮̂𝘆\n[☁️] → 𝗧𝗵𝗶́𝗻𝗵 : ${thinh}`, attachment: image}, event.threadID);
      }
      break;
    default:
      {
        const data = event.participantIDs;
        for (const userID of data) {
          var currenciesData = await Currencies.getData(userID)
          if (currenciesData != false) {
            var money = currenciesData.money;
            if (typeof money != "undefined") {
              money -= money;
              await Currencies.setData(userID, { money });
            }
          }
        }
        api.sendMessage({body: `=== [ RESET MONEY ] ====\n━━━━━━━━━━━━━━━━━━\n[🍍] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 : ${name}\n[💕] → reset all tiền thành công cho nhóm\n[🕰] → 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀ : ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")}\n━━━━━━━━━━━━━━━━━━\n[⏳] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗼𝗻𝗹 : ${anh} 𝗴𝗶𝗼̛̀ ${la} 𝗽𝗵𝘂́𝘁 ${mdonq} 𝗴𝗶𝗮̂𝘆\n[🍒] → 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́ : ${xuly} 𝗴𝗶𝗮̂𝘆\n[☁️] → 𝗧𝗵𝗶́𝗻𝗵 : ${thinh}`,attachment: image}, event.threadID);
        }
      break;
   }
          }